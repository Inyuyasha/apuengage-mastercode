import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import ServiceForm from '../../components/ServiceForm';
import React, { useState } from "react";



export default function SubmitServiceScreen() {
 const [submissions, setSubmissions] = useState<any[]>([]);
 const router = useRouter();


 const handleFormSubmit = (data: any) => {
   setSubmissions([...submissions, data]);
   alert('Form submitted successfully!');
 };


 return (
   <View style={styles.container}>
     <Text style={styles.title}>Submit Service Hours</Text>
     <ServiceForm onSubmit={handleFormSubmit} />
     <Button title="View Submissions" onPress={() => router.push('../view-submissions')} />
   </View>
 );
}


const styles = StyleSheet.create({
 container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#F8F8F8' },
 title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
});
