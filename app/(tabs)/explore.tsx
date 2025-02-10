// Import the required React Native components and custom components
import { Image, Platform, StyleSheet, TouchableOpacity } from 'react-native';
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
      headerBackgroundColor={{ light: '#CB2323', dark: '#353636' }}
      headerImage={
        <Image source={require('@/assets/images/apu-logo.png')} style={styles.headerImage} />
      }
    >
      {/* Header */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      <ThemedText>
        Matthew 5:14-16 "You are the light of the world. A town built on a hill cannot be hidden. Neither do people light a lamp and put it under a bowl. Instead they put it on its stand, and it gives light to everyone in the house. In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven. "
      </ThemedText>

      {/* No.1 pattern*/}
      <Collapsible title="Disclaimer!! Information about Graduation (MUST READ!)">
        <ThemedText>
          Failure to complete total service credit hours will result in
          <ThemedText type="defaultSemiBold"> not receiving your diploma!</ThemedText> You will walk on Graduation day but will not receive your diploma untill service credit hours are completed!
        </ThemedText>
        <ExternalLink href="https://catalog.apu.edu/policies-procedures/undergraduate/graduation-requirements-commencement/#:~:text=All%20candidates%20for%20graduation%20must,designated%20academic%20service%2Dlearning%20courses.">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      
      {/* No.2 pattern*/}
      <Collapsible title="Settings">
        <ThemedText>
          Profile information, Language, Notifications, Dark/Light Mode, FAQs (Contact support, Report a problem).
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
      </Collapsible>

     {/* No.3 pattern*/}
     <Collapsible title="Search">
        <ThemedText>
          Organizations that have been vetted and approved by OSD! <ThemedText type="defaultSemiBold">Can be found in the Commuinty Board!</ThemedText>
          <ThemedText type="defaultSemiBold"> Click the link to go to apuosd.org to learn more!</ThemedText>
        </ThemedText>
        <ExternalLink href="https://apuosd.org/community-board-2023">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>


      {/* No.4 pattern*/}
      <Collapsible title="Events">
        <ThemedText>
        <ThemedText type="defaultSemiBold">Ongoing opportunities and One-time opportunites from Azusa to Los Angeles.</ThemedText> {' '}
        Click on the link to learn more how both opportunities work!</ThemedText>
        <ExternalLink href="https://apuosd.org/local-engagement">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>


     {/* No.5 pattern*/}
     <Collapsible title="Rewards">
        <ThemedText>
        The Rewards section offers a wide range of exciting rewards that you can earn through completing service credits!
        </ThemedText>
      </Collapsible>

    {/* No.5 pattern*/}
      <Collapsible title="Shoutout to the Creators of APUEngage!">
      <ThemedText type="defaultSemiBold">In His Service</ThemedText>
        <ThemedText>Brodrick Bohren / Darien Camacho / Annabelle Laputz / Yi Zhou / David Galan 
        </ThemedText>
      </Collapsible>

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
    height: 220,
    width: 300,
    bottom: 0,
    left: 10,
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
});