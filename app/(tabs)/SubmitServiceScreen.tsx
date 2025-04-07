import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import ServiceForm from '../../components/ServiceForm';
import React, { useState } from 'react';

export default function SubmitServiceScreen() {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const router = useRouter();

  const handleFormSubmit = (data: any) => {
    setSubmissions([...submissions, data]);
    alert('Form submitted successfully!');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Submit Service Hours</Text>

        {/* Form container with optional styling */}
        <View style={styles.formWrapper}>
          <ServiceForm onSubmit={handleFormSubmit} />
        </View>

        {/* View Submissions button */}
        <View style={styles.buttonWrapper}>
          <Button
            title="View Submissions"
            onPress={() => router.push('../view-submissions')}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formWrapper: {
    width: '100%',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 20,
  },
  buttonWrapper: {
    width: '100%',
  },
});
