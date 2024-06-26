import styled from 'styled-components/native';
import {width} from '../../utils/Functions.ts';
import {KeyboardAvoidingView, Platform} from 'react-native';

export const SignUpContainer = styled(KeyboardAvoidingView).attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
})`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  background-color: white;
`;

export const ScreenLabel = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: black;
  width: ${width * 0.9}px;
`;

export const InputsView = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ScrollViewContainer = styled.ScrollView`
  flex-grow: 1;
`;

export const HalfInputView = styled.View`
  width: ${width * 0.9}px;
`;
