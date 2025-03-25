// Import the required React Native components and custom components
import { Image, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router'; // Import useRouter


export default function TabTwoScreen() {
  const router = useRouter(); // Initialize router inside function


  // Function to handle button clicks
  const handlePress = (title: string) => {
    if (title === 'Rewards') {
      router.push('/Reward'); // Navigate to the Rewards page
    } else {
      console.log(`Pressed ${title}`);
    }
  };


  // Define the configuration array of function buttons
  const F_BUTTON = [
    { title: 'Settings', color: '#990000' },
    { title: 'Search', color: '#CC0000' },
    { title: 'Events', color: '#FF0000' },
    { title: 'Rewards', color: '#FF3333' },
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#CB2323', dark: 'red' }}
      headerImage={
        <Image source={require('@/assets/images/apu-logo.png')} style={styles.headerImage} />
      }
    >
      {/* Header */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      <ThemedText style={styles.titleContainer}>Matthew 5:14–16 (NIV)</ThemedText>
      <ThemedText>
        “You are the light of the world. A town built on a hill cannot be hidden. 
        Neither do people light a lamp and put it under a bowl. Instead they put it on its stand, 
        and it gives light to everyone in the house. In the same way, let your light shine before others, 
        that they may see your good deeds and glorify your Father in heaven.”
      </ThemedText>
      
      <View style={styles.divider} />

 {/* Pattern 1 */}
  <View style={styles.sectionContainer}>
  <Collapsible title="Disclaimer!! Information about Graduation (MUST READ!)">
    <ThemedText>
      You must complete all required service credit hours to receive your diploma. 
      You can still walk at graduation, but your diploma will be held until all hours are finished.
    </ThemedText>
  <ExternalLink href="https://catalog.apu.edu/policies-procedures/undergraduate/graduation-requirements-commencement/#:~:text=All%20candidates%20for%20graduation%20must,designated%20academic%20service%2Dlearning%20courses.">
    <ThemedText type="link">Learn more</ThemedText>
  </ExternalLink>
  </Collapsible>


 {/* Pattern 2 */}
 <Collapsible title="Shoutout to the Creators of APUEngage!">
    <ThemedText>
    Special thanks to Brodrick, Darien, Annabelle, Yi, and David for bringing APUEngage to life!
    </ThemedText>
  </Collapsible>

 {/* Pattern 3 */}
 <Collapsible title="Events">
  <ThemedText>
    Find one-time and ongoing service opportunities from Azusa to Los Angeles.
  </ThemedText>
</Collapsible>


{/* Pattern 4 */}
  <Collapsible title="Rewards">
  <ThemedText>
    Earn fun rewards by completing your service credit hours!
  </ThemedText>
</Collapsible>


 {/* Pattern 5 */}
 <Collapsible title="Search">
  <ThemedText>
    Discover organizations vetted and approved by the Office of Service and Discipleship (OSD) on our Community Board.
  </ThemedText>
  <ExternalLink href="https://apuosd.org/community-board-2023">
    <ThemedText type="link">Learn more</ThemedText>
  </ExternalLink>
</Collapsible>


{/* Pattern 6 */}
  <Collapsible title="Settings">
    <ThemedText>
      Profile information, Language, Notifications, Dark/Light Mode, FAQs (Contact support, Report a problem)
    </ThemedText>
  </Collapsible>
</View>


      {/* Button Grid */}
      <ThemedView style={styles.buttonGrid}>
        {F_BUTTON.map((btn, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.button, { backgroundColor: btn.color }]}
            onPress={() => handlePress(btn.title)}
          >
            <Image style={styles.logo} resizeMode="contain" />
            <ThemedText style={styles.buttonText}>{btn.title}</ThemedText>
          </TouchableOpacity>
        ))}
      </ThemedView>
    </ParallaxScrollView>
  );
}


// Define styles preresent
const styles = StyleSheet.create({
  headerImage: {
    height: 180,
    width: '42%',
    bottom: 0,
    left: 120,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
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
    width: '40%',
    aspectRatio: 1.5,
    borderRadius: 16,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
 
  logo: {
    width: 30,
    height: 30,
    marginBottom: 8,
  },
 
  buttonText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
 
  divider: {
    height: 1,
    backgroundColor: '#555',
    opacity: 0.3,
    marginVertical: 12,
    width: '100%',
  },
  
  sectionContainer: {
    gap: 12,
    marginTop: 8,
    marginBottom: 24,
    paddingHorizontal: 4,
  },
});
