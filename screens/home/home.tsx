import React, { useCallback, useEffect, useRef } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { styles } from './style';
import '../../localization/i18n';
import { Button } from '../../components/Button/Button';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const navigateToDashboard = useCallback(() => {
    if (isMounted.current) {
      navigation.navigate('Dashboard');
    }
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: '100%', height: '50%' }}>
        <Image
          source={require('../../assets/photos/welcomePhoto1.jpg')}
          style={styles.photoFirst}
        />
        <Image
          source={require('../../assets/photos/welcomePhoto2.jpg')}
          style={styles.photoSecond}
        />
        <Image
          source={require('../../assets/photos/welcomePhoto3.jpg')}
          style={styles.photoThird}
        />
      </ScrollView>
      <View style={styles.container2}>
        <Text style={styles.text}>{t('welcome')}</Text>
        <Button text={t('let\'s get started')} onPressFunction={() => navigateToDashboard()}/>
      </View>
    </View>
  );
};

export default HomeScreen;
