import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';
import { Empty } from '../../components/Empty';

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize: 24, color: '#4EA8DE', fontWeight: 'bold'}}>Todo</Text>
      </View>
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
        />
        <TouchableOpacity style={styles.button}>
          <AntDesign name="pluscircleo" size={16} color="#FFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.heading}>
          <View style={styles.flex}>
            <Text style={{fontSize: 14, color: '#4EA8DE', fontWeight: 'bold'}}>Criadas</Text>
            <Text style={styles.amount}>0</Text>
          </View>
          <View style={styles.flex}>
            <Text style={{fontSize: 14, color: '#8284FA', fontWeight: 'bold'}}>Concluídas</Text>
            <Text style={styles.amount}>0</Text>
          </View>
        </View>
        <Empty />
      </View>
    </SafeAreaView>
  );
}