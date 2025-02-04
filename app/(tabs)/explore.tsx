// Import the required React Native components and custom components
import { Image, Platform, StyleSheet, TouchableOpacity } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// Define the configuration array of function buttons
const F_BUTTON =[
  { 
    title: 'Settings', 
    color: '#990000', 
  },
  { 
    title: 'Search', 
    color: '#CC0000',
  },
  { 
    title: 'Events', 
    color: '#FF0000',
  },
  { 
    title: 'Rewards', 
    color: '#FF3333',
  },
]

// Define the TabTwoScreen component
export default function TabTwoScreen() {

  // The function to handle button click events
  const handlePress = (title: string) => {
    console.log(`Pressed ${title}`)  // can add navigation logic here
    window.location.href = "https://apuosd.org/local-engagement";
  }

  return (
    // Use the ParallaxScrollView component as the root view of the page
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#CB2323', dark: '#353636' }}
            headerImage={
              <Image
                source={require('@/assets/images/apu-logo.png')}
                style={styles.headerImage}
              />
            }>
      
      {/* Button grid */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      <ThemedText>Matthew 5:14-16 "You are the light of the world. A town built on a hill cannot be hidden. 
        Neither do people light a lamp and put it under a bowl. Instead they put it on its stand, and it 
        gives light to everyone in the house. In the same way, let your light shine before others, that they
         may see your good deeds and glorify your Father in heaven" (NIV).</ThemedText>
      
      {/* No.1 pattern*/}
      <Collapsible title="File-based routing">
        <ThemedText>
          This app has two screens:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          sets up the tab navigator.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      
      {/* No.2 pattern*/}
      <Collapsible title="Android, iOS, and web support">
        <ThemedText>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
        </ThemedText>
      </Collapsible>
      
      {/* No.3 pattern*/}
      <Collapsible title="Images">
        <ThemedText>
          For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
          different screen densities
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="@/assets/images/apu-logo.png">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      
      {/* No.4 pattern*/}
      <Collapsible title="Custom fonts">
        <ThemedText>
          Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
            custom fonts such as this one.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      
      {/* No.5 pattern*/}
      <Collapsible title="Light and dark mode components">
        <ThemedText>
          This template has light and dark mode support. The{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
          what the user's current color scheme is, and so you can adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      
      {/* No.6 pattern*/}
      <Collapsible title="Animations">
        <ThemedText>
          This template includes an example of an animated component. The{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
          the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>{' '}
          library to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>

      {/* Button set up */}
      <ThemedView style = {styles.buttonGrid}>
        {/* Button property*/}
        {F_BUTTON.map((btn, index) => (
          <TouchableOpacity
            key={index} 
            style={[styles.button, { backgroundColor: btn.color }]}
            onPress={() => handlePress(btn.title)}
          >  
            {/* Button image */}
            <Image
            style={styles.logo}
            resizeMode="contain"
            />
            {/* Button text */}
            <ThemedText style={styles.buttonText}>
            {btn.title}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </ThemedView>

    </ParallaxScrollView>
  );
}

// Define styles preresent
const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -150,
    left: -30,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
    padding: 16,
  },
  button: {
    width: '35%',
    aspectRatio: 1.5,
    borderRadius: 16,
    padding: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8, 
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
});
