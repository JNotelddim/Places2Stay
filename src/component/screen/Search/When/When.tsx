import React from 'react';
import {View} from 'react-native';
import {Calendar} from 'react-native-calendars';

import {getDurationOptions} from 'utils';
import {useHandleCalendarRange} from 'hook';

import {Toggle, Radio, RadioOption, TimeDurationOption} from 'component/base';
import {SearchStep} from 'component/layout';
import {SectionHeader} from 'component/partial';
import {useMockDb} from 'component/provider';

import styles from './When.style';

import {Duration, MarkedDays} from 'type/dates.type';
import {WhenScreenProps} from './when.type';

const When: React.FC<WhenScreenProps> = ({navigation, route}) => {
  const [isCalendar, setIsCalendar] = React.useState(true);
  const [startDate, setStartDate] = React.useState<Date | undefined>();
  const [endDate, setEndDate] = React.useState<Date | undefined>();
  const [calendarMarkedDays, setCalendarMarkedDays] =
    React.useState<MarkedDays>({});
  const [durationType, setDurationType] = React.useState<Duration>('Weekend');
  const [selectedDurationOption, setSelectedDurationOption] = React.useState();

  const durationOptions = getDurationOptions(durationType);

  const mockDb = useMockDb();
  const city = mockDb.getCityById(route.params.cityId);

  const {handleCalendarDayPress} = useHandleCalendarRange({
    startDate,
    endDate,
    calendarMarkedDays,
    setStartDate,
    setEndDate,
    setCalendarMarkedDays,
  });

  const handleToggleChange = (isChecked: Boolean) => {
    setIsCalendar(!isChecked);
  };

  const handleSkipPress = () => {
    navigation.push('Who', {...route.params});
  };

  const handleNextPress = () => {
    if (startDate && endDate) {
      navigation.push('Who', {
        ...route.params,
        dates: {
          startDate: startDate?.toISOString(),
          endDate: endDate?.toISOString(),
        },
      });
    }
  };

  return (
    <SearchStep
      title="When will you be there?"
      cityName={city?.name || 'Error'}
      showNext
      showSkip
      onNextPress={handleNextPress}
      onSkipPress={handleSkipPress}
      nextDisabled={!startDate || !endDate}>
      <View>
        <Toggle
          style={styles.toggle}
          leftOptionText="Calendar"
          rightOptionText="I'm Flexible"
          onChanged={handleToggleChange}
        />

        {isCalendar ? (
          <Calendar
            style={styles.calendar}
            markingType="period"
            markedDates={calendarMarkedDays}
            onDayPress={handleCalendarDayPress}
          />
        ) : (
          <View>
            <SectionHeader heading={`Stay for a ${durationType}`} />
            <View>
              <Radio
                style={styles.radio}
                value={durationType}
                onChange={(newValue: string) => {
                  setDurationType(newValue as Duration);
                  setStartDate(undefined);
                  setEndDate(undefined);
                }}>
                <RadioOption value="Weekend">Weekend</RadioOption>
                <RadioOption value="Week">Week</RadioOption>
                <RadioOption value="Month">Month</RadioOption>
              </Radio>
            </View>
            <SectionHeader heading={`Go in ${durationType}`} />
            <View>
              <Radio
                value={selectedDurationOption}
                style={[styles.radio, styles.overflowRadio]}
                contentContainerStyle={styles.radioContent}
                onChange={newDurationOption => {
                  setStartDate(newDurationOption.startDate);
                  setEndDate(newDurationOption.endDate);
                  setSelectedDurationOption(newDurationOption);
                }}>
                {durationOptions.map(option => (
                  <TimeDurationOption
                    key={option.label}
                    value={option}
                    durationType={durationType}
                  />
                ))}
              </Radio>
            </View>
          </View>
        )}
      </View>
    </SearchStep>
  );
};

export default When;
