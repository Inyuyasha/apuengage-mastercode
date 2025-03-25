import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
import React from "react";


export default function ViewSubmissionsScreen() {
 const router = useRouter();
 // Example data (replace with stored submissions)
 const submissions = [
   { hours: 5, credits: 2, experience: 'Helped at a food bank.' },
   { hours: 3, credits: 1, experience: 'Volunteered at a shelter.' },
 ];


 return (
   <View style={styles.container}>
     <Text style={styles.title}>Your Submissions</Text>
     <ScrollView style={styles.list}>
       {submissions.map((entry, index) => (
         <View key={index} style={styles.entry}>
           <Text>Hours: {entry.hours}</Text>
           <Text>Credits: {entry.credits}</Text>
           <Text>Experience: {entry.experience}</Text>
           <Button title="Back" onPress={() => router.back()} />
         </View>
       ))}
     </ScrollView>


  
   </View>
 );
}


const styles = StyleSheet.create({
 container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#F8F8F8' },
 title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
 list: { width: '100%', marginBottom: 20 },
 entry: {
   padding: 15,
   borderWidth: 1,
   borderColor: '#ddd',
   borderRadius: 8,
   marginBottom: 10,
   backgroundColor: '#FFF',
 },
});
//{<Button title="Back" onPress={() => router.back()} />}
