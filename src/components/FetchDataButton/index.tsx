import React from 'react';
import {ButtonIcon, ButtonLabel, FetchDataButtonContainer} from './styles.ts';
import {FetchDataButtonProps} from './interface';

const FetchDataButton: React.FC<FetchDataButtonProps> = ({
  onPress,
  label,
  iconName,
}) => {
  return (
    <FetchDataButtonContainer onPress={onPress}>
      <ButtonLabel numberOfLines={1}>{label}</ButtonLabel>
      <ButtonIcon name={iconName} />
    </FetchDataButtonContainer>
  );
};

export {FetchDataButton};
