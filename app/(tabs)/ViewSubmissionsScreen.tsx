import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
import React from 'react';

export default function ViewSubmissionsScreen() {
  const router = useRouter();

  // Example data (replace with stored submissions)
  const submissions = [
    { hours: 5, credits: 2, experience: 'Helped at a food bank.' },
    { hours: 3, credits: 1, experience: 'Volunteered at a shelter.' },
  ];

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <View style={styles.backButton}>
        <Button title="← Back" onPress={() => router.back()} />
      </View>

      <Text style={styles.title}>Your Submissions</Text>

      <ScrollView style={styles.list}>
        {submissions.map((entry, index) => (
          <View key={index} style={styles.entry}>
            <Text style={styles.entryHeading}>Submission {index + 1}</Text>
            <Text style={styles.entryText}>Hours: {entry.hours}</Text>
            <Text style={styles.entryText}>Credits: {entry.credits}</Text>
            <Text style={styles.entryText}>Experience:</Text>
            <Text style={styles.experienceText}>{entry.experience}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 20,
    paddingTop: 60, // adjust to push content down
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  list: {
    width: '100%',
  },
  entry: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Android shadow
  },
  entryHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  entryText: {
    fontSize: 16,
    marginBottom: 4,
  },
  experienceText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#555',
  },
});
