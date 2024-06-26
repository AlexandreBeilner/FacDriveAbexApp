import styled from 'styled-components/native';
import {height, width} from '../../utils/Functions.ts';

export const AlertContainer = styled.View<{sucsess: boolean}>`
  position: absolute;
  top: 20px;
  width: ${width * 0.9}px;
  height: ${height * 0.09}px;
  background-color: ${props => (props.sucsess ? 'green' : 'red')};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

export const AlertMessage = styled.Text`
  font-size: 18px;
  color: white;
`;
