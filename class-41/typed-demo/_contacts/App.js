import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Vibration, Linking, Button } from 'react-native'; 
import * as Contacts from 'expo-contacts';

export default function App() {

  const [contactList, setContactList] = useState([]);

  useEffect(() => {

    const getContacts = async () => {
      // ask the user for permission
      const { status } = await Contacts.requestPermissionsAsync();
      console.log(status);

      if (status === 'granted') {
        const contactData = await Contacts.getContactsAsync();
        setContactList(contactData.data);
        Vibration.vibrate();
      }
    };

    getContacts();
  }, []);

  const call = (contact) => {
    const phoneNumber = contact.phoneNumbers[0].number;
    const link = `tel:${phoneNumber}`;
    // makes a phone call
    Linking.canOpenURL(link)
      .then(supported => Linking.openURL(link))
      .catch(console.error);
  }


  return (
    <View style={styles.container}>
      <Text>Look at my text!</Text>
      <StatusBar style="auto" />
      <FlatList
        data={contactList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Button title={item.name || 'No name'} onPress={() => call(item)} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
