import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Modal, FlatList, Image } from 'react-native';
import { useRouter } from 'expo-router';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function EventsScreen() {
  const router = useRouter();
  const [isModalVisible, setModalVisible] = useState(false); // For showing the modal
  const [selectedValue, setSelectedValue] = useState('One-time opportunities'); // Default value
  const [events, setEvents] = useState<{ title: string; description: string}[]>([]); // Array to hold events dynamically

  const toggleModal = () => {
    setModalVisible(!isModalVisible); // Toggle visibility of the dropdown
  };

  const handleSelectOption = (option: string) => {
    setSelectedValue(option);
    toggleModal(); // Close the dropdown after selecting an option

    // Update the events based on the selection
    if (option === 'One-time opportunities') {
      setEvents([
        { title: 'Azusa Coastal Cleanup #2 (April 5th, Sat)', description: 'Help clean up trash at Manhattan Beach and earn service credit.' },
        { title: 'Eaton Fire Response (April 5th, Sat)', description: 'Volunteer to help families who have been affected by the fire.' },
        { title: 'El Sereno Home Build (April 5th, Sat)', description: 'Build homes, communitites and hope! No construction experience necessary.' },
        { title: 'Austim Awareness & Acceptance Walk (April 6th, Sun)', description: 'Help with setting up the event and serve refreshments to walk participants! Cheer and work at game booths.' },
        { title: 'Murray Mindfulness Fair (April 11th, Fri)', description: 'Volunteers will be assigned stations with information about different strategies to push through anxiety, stress, anger and other emotions.' },
        { title: 'Spring Care Day (April 12th, Sat)', description: 'Volunteer with FoodED! You will be improving a garden at a school that focuses on healthy eating and climate change.' },
        { title: 'Azusa Coastal Cleanup #4 (April 12th, Sat)', description: 'Help clean up trash at Huntington Beach and earn service credit.' },

      ]);
    } else {
      setEvents([
        { title: 'Community Garden', description: 'Learn about urban farming and gardening, grow fruit and vegetables on campus to support student and community food security!' },
        { title: 'Community Meal', description: 'Do you want to serve local residents of Azusa, at a location just minutes walking distance from APU? Foothill Community Church invites you to join our weekly Community Meal. ' },
        { title: 'Homework House', description: 'Students serve as tutors and mentors for small groups of students in the school readiness and elementary program, middle school, and high school.' },
        { title: 'Young Life Capernaum', description: ' Students help alongside our friends with special needs while dancing, playing silly games, worshiping and meeting kids where they are.' },

      ]);
    }
  };

  const openExternalLink = () => {
    Linking.openURL('https://apuosd.org/local-engagement');
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#CB2323', dark: 'red' }}
      headerImage={
        <Image
          source={require('@/assets/images/apu-logo.png')}
          style={styles.headerImage}
        />
      }
    >
      {/* Top Left Back Button */}
      <TouchableOpacity style={styles.backTopLeft} onPress={() => router.push('/explore')}>
        <Text style={styles.backTopLeftText}>← Back to Explore</Text>
      </TouchableOpacity>

      {/* Title Section */}
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Events</Text>
        <Text style={styles.subtitle}>Here is the list of events available!</Text>
      </View>

      {/* Custom Dropdown (Modal) */}
      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLabel}>Select Event Type</Text>
        <TouchableOpacity style={styles.picker} onPress={toggleModal}>
          <Text style={styles.pickerText}>{selectedValue}</Text>
        </TouchableOpacity>
      </View>

      {/* Modal for Options */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <FlatList
              data={['One-time opportunities', 'Ongoing opportunities']}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalOption}
                  onPress={() => handleSelectOption(item)}
                >
                  <Text style={styles.modalOptionText}>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
            />
          </View>
        </View>
      </Modal>

      {/* Event Display Section */}
      {events.length > 0 && (
        <View style={styles.eventBox}>
          <Text style={styles.eventBoxTitle}>Service Credit Events         (Spring 2025)</Text>
          {events.map((event, index) => (
            <View key={index} style={styles.eventItem}>
              <Text style={styles.eventTitle}>{event.title}</Text>
              <Text style={styles.eventDescription}>{event.description}</Text>
            </View>
          ))}
        </View>
      )}

      {/* View Events Button */}
      <TouchableOpacity style={styles.button} onPress={openExternalLink}>
        <Text style={styles.buttonText}>Go to Events</Text>
      </TouchableOpacity>

      {/* Info Box */}
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Sign up now!</Text>
        <Text style={styles.infoText}>
          One-Time opportunity event information changes every semester.
        </Text>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',
  },
  headerImage: {
    width: '100%',
    height: 175,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 35,
  },
  backTopLeft: {
    position: 'absolute',
    top: 10,
    left: 5,
    zIndex: 100,
  },
  backTopLeftText: {
    fontSize: 15,
    color: '#FFF',
    textDecorationLine: 'underline',
  },
  titleBlock: {
    gap: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    bottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#CCC',
    textAlign: 'center',
    bottom: 10,
  },
  button: {
    backgroundColor: '#CC0000',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginTop: 10,
    alignSelf: 'center',
    top: 300,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  infoBox: {
    marginTop: '95%',
    padding: 5,
    width: '100%',
    backgroundColor: 'red',
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
  },
  dropdownContainer: {
    marginTop: 40,
    width: '80%',
    alignItems: 'center',
    left: 40,
  },
  dropdownLabel: {
    fontSize: 18,
    color: '#FFF',
    marginBottom: 8,
    right: 10,
  },
  picker: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
  },
  modalOption: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  modalOptionText: {
    fontSize: 18,
    color: '#000',
  },
  eventBox: {
    marginTop: 40,
    padding: 15,
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    width: '100%',
    alignSelf: 'center',
  },
  eventBoxTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  eventItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventDescription: {
    fontSize: 16,
    color: '#555',
  },
});
