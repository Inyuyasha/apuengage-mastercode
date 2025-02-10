import { View, Text, StyleSheet, ImageBackground, Button, ScrollView } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

// Back Button Component
// This component renders a button that navigates back to the '/explore' screen when pressed.
const Reward = () => {
  const router = useRouter(); // Initialize the router for navigation

  return (
    <View style={{ marginVertical: 10 }}>
      <Button title="Back to Explore" onPress={() => router.push('/explore')} />
    </View>
  );
};

// Main Rewards Screen Component
// This component displays the rewards screen, including a list of rewards and information on how to earn them.
const RewardsScreen = () => {
  // Array of rewards with titles and image URLs
  const rewards = [
    { title: 'Gift Card', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl9ah5Lp6CYS7EHNuSDmz2rXHEjh9zDQAnUg&s' },
    { title: 'Raising Canes', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKwB8hjVHFwc6Zs04raGFVKRC3TulJNuiGpA&s' },
    { title: 'In N Out', image: 'https://logos-world.net/wp-content/uploads/2022/02/In-N-Out-Burger-Symbol.png' },
    { title: 'Chick FilA', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6AzPZZWfqWzVfKe7YmPAEcNtmYR2bKSop4w&s' },
    { title: 'Panda Express', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGUTLbMJq62VAXy2oM-B29TFcLKTFOQUQL8g&s' },
    { title: 'Chiptole', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgDCi9Lshg3CXUXp0KGL1ywhs7bznEX9b_GA&s' },
    { title: 'Starbucks', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAzzV-bM5MBYf3NnMYOUeSeVIntAbv6YyhWg&s' },
    { title: 'APU Campus Store', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSdtjlx0UQJICQb_b5R5bK9TZptTguekSAFg&s' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title and Subtitle */}
      <Text style={styles.title}>Rewards</Text>
      <Text style={styles.subtitle}>Here is the list of rewards available!</Text>

      {/* Back Button Component */}
      <Reward />

      {/* Rewards Grid */}
      {/* Displaying rewards in a grid format */}
      <View style={styles.grid}>
        {rewards.map((reward, index) => (
          <ImageBackground 
            key={index} 
            source={{ uri: reward.image }} 
            style={styles.tile} 
            imageStyle={{ borderRadius: 12 }} // Rounds the corners of the images
          >
            <View style={styles.overlay}> {/* Dark overlay for better text visibility */}
              <Text style={styles.tileText}>{reward.title}</Text>
            </View>
          </ImageBackground>
        ))}
      </View>

      {/* How to Earn Rewards Section */}
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>How to Earn Rewards</Text>
        <Text style={styles.infoText}>
          Complete service credits and participate in activities to earn these rewards!
        </Text>
      </View>
    </ScrollView>
  );
};

// Exporting Components
// Exporting the main screen and the back button component for use in other parts of the app
export default RewardsScreen;
export { Reward };

// Styles
// Defines the styling for the components used in the Rewards screen
const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Ensures the ScrollView takes up the entire screen
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F8F8F8',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
  },
  grid: {
    flexDirection: 'row', // Lays out the rewards in rows
    flexWrap: 'wrap', // Allows items to wrap to the next line
    justifyContent: 'center',
    gap: 12, // Space between the tiles
  },
  tile: {
    width: '45%', // Each tile takes up 45% of the row width
    aspectRatio: 1.5, // Controls the height relative to the width
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 12,
    overflow: 'hidden',
  },
  overlay: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for text
    alignItems: 'center',
  },
  tileText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  infoBox: {
    marginTop: 20,
    padding: 15,
    width: '100%',
    backgroundColor: '#FF6666',
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 }, // Shadow positioning
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Elevation for Android shadow effect
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
});
