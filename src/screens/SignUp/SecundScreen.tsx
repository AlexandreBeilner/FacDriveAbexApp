import React, {useState} from 'react';
import {
  SignUpContainer,
  ScreenLabel,
  InputsView,
  ScrollViewContainer,
  HalfInputView,
} from './styles.ts';
import {CustomInput} from '../../components/CustomInput';
import {LoadingCar} from '../../components/LoadingCar';
import {CustomButton} from '../../components/CustomButton';
import {View} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const SecundScreen: React.FC = () => {
  const [cep, setCep] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();
  const navigateToSignUp = () => {
    navigation.navigate('ThirdScreen');
  };

  return (
    <SignUpContainer>
      <ScrollViewContainer
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1, justifyContent: 'space-around'}}>
        <ScreenLabel>Prosseguindo com o{'\n'}cadastro</ScreenLabel>
        <InputsView>
          <CustomInput value={cep} onChangeText={setCep} placeHolder={'CEP  ex: 12345-678'} keyboardType={'numeric'}/>
          <HalfInputView>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <CustomInput
                value={email}
                onChangeText={setEmail}
                placeHolder={'Estado'}
                blocked={true}
                halfInput={true}
              />
              <CustomInput
                value={password}
                onChangeText={setPassword}
                placeHolder={'Cidade'}
                blocked={true}
                halfInput={true}
              />
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <CustomInput
                value={password}
                onChangeText={setPassword}
                placeHolder={'Bairro'}
                halfInput={true}
              />
              <CustomInput
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeHolder={'N° da residência'}
                halfInput={true}
              />
            </View>
          </HalfInputView>
          <CustomInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeHolder={'Complemento (opcional)'}
          />
        </InputsView>
        <LoadingCar iniciaLeft={0} finalLeft={100} />
        <CustomButton
          backGroundColor={'#4ccbf8'}
          label={'Continuar'}
          labelColor={'black'}
          onPress={navigateToSignUp}
        />
      </ScrollViewContainer>
    </SignUpContainer>
  );
};

export {SecundScreen};
