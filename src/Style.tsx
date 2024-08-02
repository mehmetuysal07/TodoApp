import React, { useState } from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1E1E1E',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
      backgroundColor: '#000',
    },
    title: {
      fontSize: 24,
      color: '#FFA500',
      fontWeight: 'bold',
    },
    counter: {
      fontSize: 24,
      color: '#FFA500',
    },
    inputContainer: {
      flexDirection: 'row',
      padding: 10,
      alignItems: 'center',
    },
    input: {
      flex: 1,
      padding: 10,
      borderColor: '#CCC',
      borderWidth: 1,
      borderRadius: 5,
      marginRight: 10,
      color: '#FFF',
      backgroundColor: '#2E2E2E',
    },
    todoItem: {
        padding: 15,
        marginVertical: 5,
        marginHorizontal: 10,
        backgroundColor: '#32CD32',
        borderRadius: 5,
      },
      completed: {
        backgroundColor: '#555',
      },
      todoText: {
        fontSize: 16,
        color: '#FFF',
      },
      completedText: {
        textDecorationLine: 'line-through',
        color: '#888',
      },
  });

  export default styles;