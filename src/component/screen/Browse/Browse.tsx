import React from 'react';
import {ScrollView} from 'react-native';

import {Carousel, CityCard, ImageCard, SectionHeader} from 'component/partial';

import {getFakePlace} from 'utils';
import {CITIES} from 'const';

import styles from './Browse.style';
import {useModal} from 'component/provider';
import {InputFacadeButton} from 'component/base';

/**
 * Home is the screen the user comes to first when they open the application
 */
const Browse: React.FC = () => {
  const {openModal} = useModal();

  return (
    <ScrollView style={styles.wrapper}>
      {/* Do I need both the SafeAreaView and the ScrollView? */}
      <InputFacadeButton
        title="Try 'Boston'"
        onPress={() => openModal('CitySearch')}
      />

      <SectionHeader
        heading="Find your getaway"
        description="Our spaces are designed for comfort - whether you are working, relaxing, or craving some spaces"
      />

      <ImageCard style={styles.cta} {...getFakePlace()} />

      <SectionHeader heading="25+ Cities To Explore" />

      <Carousel style={styles.carousel} items={CITIES} component={CityCard} />
    </ScrollView>
  );
};

export default Browse;
