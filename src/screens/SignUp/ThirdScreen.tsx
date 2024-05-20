import React, {useState} from 'react';
import {
  SignUpContainer,
  ScreenLabel,
  InputsView,
  ScrollViewContainer,
} from './styles.ts';
import {CustomInput} from '../../components/CustomInput';
import {LoadingCar} from '../../components/LoadingCar';
import {CustomButton} from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const ThirdScreen: React.FC = () => {
  const navigation = useNavigation();
  const navigateToSignUp = () => {
    navigation.navigate('SecundScreen');
  };

  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [CPF, setCPF] = useState('');
  return (
    <SignUpContainer>
      <ScrollViewContainer
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1, justifyContent: 'space-around'}}>
        <ScreenLabel>Informe seus dados{'\n'}pessoais</ScreenLabel>
        <InputsView>
          <CustomInput
            value={email}
            onChangeText={setEmail}
            placeHolder={'Nome completo'}
          />
          <CustomInput
            value={email}
            onChangeText={setEmail}
            placeHolder={'Idade'}
            keyboardType={'numeric'}
          />
          <CustomInput
            value={age}
            onChangeText={setAge}
            placeHolder={'CPF'}
            keyboardType={'numeric'}
          />
          <CustomInput
            value={CPF}
            onChangeText={setCPF}
            placeHolder={'Data de nascimento'}
            keyboardType={'numeric'}
          />
        </InputsView>
        <LoadingCar iniciaLeft={100} finalLeft={170} />
        <CustomButton
          backGroundColor={'#4ccbf8'}
          label={'Cadastrar'}
          labelColor={'black'}
          onPress={navigateToSignUp}
        />
      </ScrollViewContainer>
    </SignUpContainer>
  );
};

export {ThirdScreen};
