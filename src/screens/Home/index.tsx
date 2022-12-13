import { useState } from 'react';
import { FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import uuid from 'react-native-uuid';
import { styles } from './styles';
import { Empty } from '../../components/Empty';
import { Task } from '../../components/Task';

interface TaskProps {
  id: string
  task: string
  isChecked: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [taskText, setTaskText] = useState('')

  const taskCompleted = tasks.filter(task => task.isChecked === true)

  function handleAddTask(){
    const data = {
      id: String(uuid.v4()),
      task: taskText.trim(),
      isChecked: false
    }
    setTasks(state => [data, ...state])
    setTaskText('')
  }

  function handleRemoveTask(id: string){
    setTasks(state => state.filter(task => task.id !== id))
  }

  function handleToggleIsCheckedTask(id: string){
    setTasks(state => state.map(task => {
      if(task.id === id){
        return {
          ...task,
          isChecked: !task.isChecked
        }
      }
      return task
    }))
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="checkcircle" size={24} color="#4EA8DE" />
        <Text style={{fontSize: 24, color: '#8284FA', fontWeight: 'bold'}}>Todo</Text>
      </View>
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          value={taskText}
          onChangeText={setTaskText}
        />
        <TouchableOpacity 
          style={[styles.button, !taskText.trim().length ? {backgroundColor: '#1E6F9F'} : undefined]}
          disabled={!taskText.trim().length}
          onPress={handleAddTask}
        >
          <AntDesign name="pluscircleo" size={16} color="#FFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.heading}>
          <View style={styles.flex}>
            <Text style={{fontSize: 14, color: '#4EA8DE', fontWeight: 'bold'}}>Criadas</Text>
            <Text style={styles.amount}>{tasks.length}</Text>
          </View>
          <View style={styles.flex}>
            <Text style={{fontSize: 14, color: '#8284FA', fontWeight: 'bold'}}>Concluídas</Text>
            <Text style={styles.amount}>{taskCompleted.length}</Text>
          </View>
        </View>
        <FlatList 
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({item}) =>(
            <Task 
              isChecked={item.isChecked} 
              task={item.task} 
              onSetChecked={() => handleToggleIsCheckedTask(item.id)} 
              onRemoveTask={() => handleRemoveTask(item.id)}
            />
          )}
          ListEmptyComponent={<Empty />}
          showsVerticalScrollIndicator={false}
        />
        
      </View>
    </SafeAreaView>
  );
}