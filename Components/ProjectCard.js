import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProjectCard = ({ project }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{project.name}</Text>
    <Text>{project.description}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProjectCard;
