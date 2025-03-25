import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React from "react";

export default function ServiceForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [hours, setHours] = useState('');
  const [credits, setCredits] = useState('');
  const [experience, setExperience] = useState('');

  const handleSubmit = () => {
    if (hours.trim() && credits.trim() && experience.trim()) {
      onSubmit({
        hours: parseInt(hours, 10),
        credits: parseInt(credits, 10),
        experience
      });
      // Clear the form after submission
      setHours('');
      setCredits('');
      setExperience('');
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Hours of Service:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 5"
        keyboardType="numeric"
        value={hours}
        onChangeText={setHours}
      />

      <Text style={styles.label}>Service Credits Applying For:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 2"
        keyboardType="numeric"
        value={credits}
        onChangeText={setCredits}
      />

      <Text style={styles.label}>Tell Us About Your Experience:</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Describe your experience..."
        multiline
        maxLength={300}
        value={experience}
        onChangeText={setExperience}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: '100%', padding: 20 },
  label: { fontSize: 16, fontWeight: 'bold', marginTop: 10 },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  textArea: { height: 100, textAlignVertical: 'top' },
});
