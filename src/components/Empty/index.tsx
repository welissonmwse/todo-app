import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './styles'

export function Empty() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="clipboard-text-outline" size={56} color="#262626" />
      <Text style={[styles.text, {fontWeight: 'bold', marginTop: 16}]}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={[styles.text]}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}