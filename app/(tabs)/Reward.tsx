import { View, Text, StyleSheet, ImageBackground, Button, ScrollView } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

// Back Button Component
const Reward = () => {
  const router = useRouter();
  return (
    <View style={{ marginVertical: 10 }}>
      <Button title="Back to Explore" onPress={() => router.push('/explore')} />
    </View>
  );
};

// Main Rewards Screen Component
const RewardsScreen = () => {
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
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Rewards</Text>
        <Text style={styles.subtitle}>Here is the list of rewards available!</Text>

        {/* Back Button Component */}
        <Reward />

        {/* Rewards Grid */}
        <View style={styles.grid}>
          {rewards.map((reward, index) => (
            <ImageBackground
              key={index}
              source={{ uri: reward.image }}
              style={styles.tile}
              imageStyle={{ borderRadius: 12 }}
            >
              <View style={styles.overlay}>
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
    </SafeAreaView>
  );
};

export default RewardsScreen;
export { Reward };

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  tile: {
    width: '45%',
    aspectRatio: 1.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 12,
    overflow: 'hidden',
    margin: 6, // Replaces unsupported gap
  },
  overlay: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
});
