import React, { useState } from 'react';
import { View, Text, Switch, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Linking } from 'react-native';

const SettingsScreen = () => {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [feedback, setFeedback] = useState('');

  return (
    <ScrollView contentContainerStyle={[styles.container, darkMode && styles.darkContainer]}>
      {/* Header */}
      <Text style={[styles.title, darkMode && styles.darkText]}>Settings</Text>

      {/* Dark Mode Toggle */}
      <View style={styles.settingItem}>
        <Text style={[styles.settingText, darkMode && styles.darkText]}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      {/* FAQ Section */}
      <View style={styles.faqSection}>
        <Text style={[styles.subtitle, darkMode && styles.darkText]}>FAQ</Text>
        <Text style={[styles.faqItem, darkMode && styles.darkText]}>Q: How do I know what counts for credit?</Text>
        <Text style={[styles.answer, darkMode && styles.darkText]}>A: See a full list of available service experiences.</Text>
        <Text style={[styles.faqItem, darkMode && styles.darkText]}>Q: When do I need to turn in my Service Credit Report Form?</Text>
        <Text style={[styles.answer, darkMode && styles.darkText]}>A: You should complete the online Service Credit Report Form at the end of each semester of service or immediately after completing a service experience. </Text>
      </View>

      {/* Feedback Form */}
      <View style={styles.feedbackSection}>
        <Text style={[styles.subtitle, darkMode && styles.darkText]}>Feedback</Text>
        <TextInput
          style={[styles.input, darkMode && styles.darkInput]}
          placeholder="Enter your feedback..."
          placeholderTextColor={darkMode ? "#CCC" : "#666"}
          value={feedback}
          onChangeText={setFeedback}
        />
        <Button title="Submit Feedback" onPress={() => alert('Thank you for your feedback!')} />
      </View>

      {/* Back Button */}
      <View style={{ marginVertical: 20 }}>
      <Button title="Back to Home" onPress={() => router.push('/')} />
      </View>

      {/* Contact Button */}
      <View style={{ marginVertical: 10 }}>
      <Button title="Contact Us!" onPress={() => Linking.openURL('https://www.apu.edu/spiritual-life/service-discipleship/')} />
      </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
  },
  darkContainer: {
    backgroundColor: '#1E1E1E',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
  },
  darkText: {
    color: '#FFF',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
  },
  settingText: {
    fontSize: 18,
  },
  faqSection: {
    width: '100%',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  faqItem: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  answer: {
    fontSize: 16,
    marginBottom: 10,
  },
  feedbackSection: {
    width: '100%',
    marginTop: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 10,
    marginBottom: 10,
  },
  darkInput: {
    borderColor: '#888',
    color: '#FFF',
  },
});

export default SettingsScreen;