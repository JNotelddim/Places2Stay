import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Calendar, DateData} from 'react-native-calendars';
import {MarkingProps} from 'react-native-calendars/src/calendar/day/marking';

import {colors, spacing} from 'const';
import {getDaysBetweenDates, getDurationOptions} from 'utils';
import {Radio, RadioOption, Toggle} from 'component/base';
import {SearchStep} from 'component/layout';
import {SectionHeader} from 'component/partial';
import {useMockDb, WhenScreenProps} from 'component/provider';
import {Duration} from 'type/dates.type';

const EDGE_DAY_COLOR = colors.blue;
const EDGE_DAY_TEXT_COLOR = colors.white;
const FILL_DAY_COLOR = colors.midOpacityBlue;
const FILL_DAY_TEXT_COLOR = colors.white;

const When: React.FC<WhenScreenProps> = ({navigation, route}) => {
  const mockDb = useMockDb();
  const city = mockDb.getCityById(route.params.cityId);

  const [isCalendar, setIsCalendar] = React.useState(true);
  const [startDate, setStartDate] = React.useState<Date | undefined>();
  const [endDate, setEndDate] = React.useState<Date | undefined>();
  const [calendarMarkedDays, setCalendarMarkedDays] = React.useState<{
    [key: string]: MarkingProps;
  }>({});
  const [durationSelection, setDurationSelection] =
    React.useState<Duration>('Weekend');
  const [selectedDurationOption, setSelectedDurationOption] = React.useState();
  const durationOptions = getDurationOptions(durationSelection);

  // Show options for Calendar or Flexible
  // then depending on which is selected, show a calendar (wix) or
  // options for (weekend, week ,month),
  // and depending on which of those is selected,
  // show a selector between options (if it's May now, show May, June, July for months.)

  const handleToggleChange = (isChecked: Boolean) => {
    setIsCalendar(!isChecked);
  };

  /* Sorry this function in messy, I hope to come back to it later, but for now it's working and I don't want to fall behind */
  const handleCalendarDayPress = (day: DateData) => {
    let tempMarkedDays = {...calendarMarkedDays};
    let options: MarkingProps = {
      color: EDGE_DAY_COLOR,
      textColor: EDGE_DAY_TEXT_COLOR,
    };

    const isDateBeforeCurrentStart =
      startDate && new Date(day.dateString) < startDate;
    if ((startDate && endDate) || isDateBeforeCurrentStart) {
      // Clear out existing marked days if you're clicking a new start date;
      tempMarkedDays = {};
      setStartDate(new Date(day.dateString));
      setEndDate(undefined);
      options.startingDay = true;
    } else if (!startDate) {
      options.startingDay = true;
      setStartDate(new Date(day.dateString));
    } else if (!endDate) {
      options.endingDay = true;
      const newEndDate = new Date(day.dateString);
      setEndDate(newEndDate);

      // Fill in-between days:
      const daysBetween = getDaysBetweenDates(startDate, newEndDate);
      for (const betweenDay of daysBetween) {
        tempMarkedDays[betweenDay] = {
          color: FILL_DAY_COLOR,
          textColor: FILL_DAY_TEXT_COLOR,
        };
      }
    }

    setCalendarMarkedDays({...tempMarkedDays, [day.dateString]: options});
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
            <SectionHeader heading={`Stay for a ${durationSelection}`} />
            <View>
              <Radio
                style={styles.radio}
                value={durationSelection}
                onChange={(newValue: string) => {
                  setDurationSelection(newValue as Duration);
                  setStartDate(undefined);
                  setEndDate(undefined);
                }}>
                <RadioOption value="Weekend">Weekend</RadioOption>
                <RadioOption value="Week">Week</RadioOption>
                <RadioOption value="Month">Month</RadioOption>
              </Radio>
            </View>
            <SectionHeader heading={`Go in ${durationSelection}`} />
            <View>
              <Radio
                style={styles.radio}
                value={selectedDurationOption}
                onChange={newDurationOption => {
                  setStartDate(newDurationOption.startDate);
                  setEndDate(newDurationOption.endDate);
                  setSelectedDurationOption(newDurationOption);
                }}>
                {durationOptions.map(option => {
                  return (
                    <RadioOption
                      key={option.label}
                      value={option}
                      valueComparatorKey="label">
                      {option.label}
                    </RadioOption>
                  );
                })}
              </Radio>
            </View>
          </View>
        )}
      </View>
    </SearchStep>
  );
};

const styles = StyleSheet.create({
  container: {},
  toggle: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: spacing.whitespace.large,
  },
  calendar: {
    borderRadius: 8,
  },
  buttonRow: {
    marginTop: spacing.whitespace.large,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radio: {
    marginVertical: spacing.whitespace.large,
  },
  weekendRadioOption: {
    padding: 40,
    backgroundColor: 'red',
  },
});

export default When;
