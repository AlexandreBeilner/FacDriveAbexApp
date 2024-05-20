import React, {useEffect} from 'react';
import {Car, CarRoad, LoadingCarContainer, Road} from './styles.ts';
import {Button} from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {width} from '../../utils/Functions.ts';
import {LoadingCarProps} from './interface';

const LoadingCar: React.FC<LoadingCarProps> = ({iniciaLeft, finalLeft}) => {
  const leftDistance = useSharedValue(iniciaLeft);
  useEffect(() => {
    if (leftDistance.value != finalLeft) {
      leftDistance.value = withTiming(finalLeft, {duration: 1000});
    }
  }, []);
  const animatedStyle = useAnimatedStyle(() => ({
    left: leftDistance.value,
  }));

  return (
    <LoadingCarContainer>
      <CarRoad>
        <Car
          style={animatedStyle}
          resizeMode={'contain'}
          source={require('../../assets/images/carro2.png')}
        />
      </CarRoad>
      <Road />
    </LoadingCarContainer>
  );
};

export {LoadingCar};
