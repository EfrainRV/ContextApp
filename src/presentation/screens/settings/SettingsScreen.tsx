import {Pressable, Text, View} from 'react-native';
import { styles } from '../../../config';
import { useCounterStore } from '../../store/counter-store';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export const SettingsScreen = () => {

  const count = useCounterStore( state => state.count );
  const incrementBy = useCounterStore( state => state.incrementBy );
  const decrementBy = useCounterStore( state => state.decrementBy );

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Count: ${count}`,
    });
  }, [count, navigation]);

  return (
    <View style={ styles.container}>
      <Text style={ styles.title }>Count: { count } </Text>

      <Pressable
        style={ styles.primaryButton}
        onPress={ () => incrementBy(1) }
      >
        <Text>+1</Text>
      </Pressable>

      <Pressable
        style={ styles.primaryButton}
        onPress={ () => decrementBy(1) }
      >
        <Text>-1</Text>
      </Pressable>
    </View>
  );
};
