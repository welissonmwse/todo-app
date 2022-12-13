import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';

import { styles } from './styles';

interface Props {
  isChecked: boolean
  task: string
  onSetChecked: () => void
  onRemoveTask: () => void
}

export function Task({isChecked, task, onSetChecked, onRemoveTask}: Props) {
  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={onSetChecked}
        color={isChecked ? '#5E60CE' : undefined}
      />
      <Text style={[styles.text, isChecked ? { textDecorationLine: 'line-through', color: '#808080'} : undefined]}>
        {task}
      </Text>
      <TouchableOpacity style={styles.button} onPress={onRemoveTask}>
        <FontAwesome name="trash-o" size={22} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}