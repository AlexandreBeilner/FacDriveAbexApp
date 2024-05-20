import React from 'react';
import {
  PresentationContainer,
  TextH1,
  TextH3,
  ButtonsView,
  TextsView,
  AppLogo,
} from './styles.ts';
import {CustomButton} from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const Presentation: React.FC = () => {
  const navigation = useNavigation();
  const navigateToSignUp = () => {
    navigation.navigate('FirstScreen');
  };

  return (
    <PresentationContainer>
      <AppLogo
        resizeMode={'contain'}
        source={require('../../assets/images/facdrivelogo.png')}
      />
      <TextsView>
        <TextH1>Bem vindo ao{'\n'}FacDrive</TextH1>
        <TextH3>
          FacDrive o seu APP de carronas para faculdade {'\n'}Para proceguir
          crie uma conta ou faça login!!
        </TextH3>
      </TextsView>
      <ButtonsView>
        <CustomButton
          backGroundColor={'#002039'}
          label={'Login'}
          labelColor={'white'}
          onPress={() => {}}
        />
        <CustomButton
          backGroundColor={'#4ccbf8'}
          label={'Cadastrar'}
          labelColor={'black'}
          onPress={navigateToSignUp}
        />
      </ButtonsView>
    </PresentationContainer>
  );
};

export {Presentation};
