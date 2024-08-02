import React from 'react';
import {  Text,  TouchableOpacity } from 'react-native';
import styles from './Style';

const TodoItem = ({ todo, onPress, onLongPress }) => {
  return (
    <TouchableOpacity
      style={[styles.todoItem, todo.completed && styles.completed]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={[styles.todoText, todo.completed && styles.completedText]}>
        {todo.text}
      </Text>
    </TouchableOpacity>
  );
};


export default TodoItem;
