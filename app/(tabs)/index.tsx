import { Image, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#CB2323', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/apu-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">APUEngage    "God First"    Since 1899</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Welcome to APU!</ThemedText>
        <ThemedText>
          Get Started by signing up to your local community!
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Where to find events</ThemedText>
        <ThemedText>
          Press the Explore tab (Bottom right side of your screen) to learn more about what opportunities are available to you!
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore around the App!</ThemedText>
        <ThemedText>
        Here at APU, we all strive to serve others as fellow scholars, Christians, brother(s)/sister(s), and spouse(s) just as Jesus Christ served us. The Explore Page will have (Settings // Search // Events // Rewards). To navigate and customize to your personal perferences!
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
