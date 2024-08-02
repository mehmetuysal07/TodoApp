import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import TodoItem from './TodoItem';
import styles from './Style';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim().length > 0) {
      setTodos([
        ...todos,
        { id: Date.now(), text, completed: false },
      ]);
      setText('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const activeTodosCount = todos.filter(todo => !todo.completed).length;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.counter}>{activeTodosCount}</Text>
      </View>
      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onPress={() => toggleTodo(item.id)}
            onLongPress={() => removeTodo(item.id)}
          />
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Yapılacak..."
        />
        <Button title="Kaydet" onPress={addTodo} color="#FFA500" />
      </View>
    </SafeAreaView>
  );
};



export default App;
