  import { Tabs } from 'expo-router';
  import React from 'react';
  import { Platform } from 'react-native';
  import { HapticTab } from '@/components/HapticTab';
  import { IconSymbol } from '@/components/ui/IconSymbol';
  import TabBarBackground from '@/components/ui/TabBarBackground';
  import { Colors } from '@/constants/Colors';
  import { useColorScheme } from '@/hooks/useColorScheme';
 
 
  export default function TabLayout() {
    
    const colorScheme = useColorScheme();
 
  return (
    <Tabs
    screenOptions={{
    tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    headerShown: false,
    tabBarButton: HapticTab,
    tabBarBackground: TabBarBackground,
    tabBarStyle: Platform.select({
   
   
      ios: {
  // Use a transparent background on iOS to show the blur effect
        position: 'absolute',
      },
        default: {},
        }),
        }}>
        <Tabs.Screen
        name="index"
        options={{
        title: 'Home',
        tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
        />
        <Tabs.Screen
        name="explore"
        options={{
        title: 'Explore',
        tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
        />
        <Tabs.Screen
          name="Events"
          options={{
          title: 'Events',
          tabBarIcon: ({ color }) => (
          <IconSymbol size={28} name="party.popper" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Reward"
          options={{
          title: 'Reward',
          tabBarIcon: ({ color }) => (
          <IconSymbol size={28} name="gift.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="SubmitServiceScreen"
          options={{
          title: 'Submit',
          tabBarIcon: ({ color }) => (
          <IconSymbol size={28} name="square.and.pencil" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="ViewSubmissionsScreen"
          options={{
          title: 'Submissions',
          tabBarIcon: ({ color }) => (
          <IconSymbol size={28} name="doc.text.magnifyingglass" color={color} />
            ),
          }}
        />
         <Tabs.Screen
          name="Setting"
          options={{
          title: 'Setting',
          tabBarIcon: ({ color }) => (
          <IconSymbol size={28} name="gearshape.fill" color={color} />
            ),
          }}
        />
        </Tabs>
        );
        }