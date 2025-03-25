import { Image, StyleSheet, View } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: 'white', dark: 'red' }}
      headerImage={
        <Image
          source={require('@/assets/images/apu-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">APUEngage</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Welcome to APU!</ThemedText>
        <ThemedText>
          Get Started by signing up to your local community!
        </ThemedText>
      </ThemedView>

      <View style = {styles.divider} />

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Find events</ThemedText>
        <ThemedText>
        Tap the Explore tab to discover service credit opportunities near you.
        </ThemedText>
      </ThemedView>

      <View style = {styles.divider} />


      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore the App!</ThemedText>
        <ThemedText>
        APU encourages serving like Jesus together. Use the Explore tab to understand the breakdown access within APUEngage!
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
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#999',
    opacity: 0.4,
    marginVertical: 12,
  },
  stepContainer: {
    gap: 12,
    marginBottom: 12,
  },
  logoWrapper: {
    paddingVertical: 20,
  },
  reactLogo: {
    height: 178,
    width: 180,
    bottom: 1,
    left: 125,
    position: 'absolute',
  },
});