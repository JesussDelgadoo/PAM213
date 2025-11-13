import { Text, StyleSheet, View,SectionList } from 'react-native'
import React from 'react'

const houses = [
    {title: 'DC Comics', data: ['Batman','Flash','Superman','Green Lantern','Robin','Green Arrow']},
    {title: 'Marvel Comics', data: ['Spiderman','IronMan','IronFist', 'Thor','Captain America']},
];

const SectionListScreen = () => {
    return (
        <View style={styles.container}>
            <SectionList 
            sections={houses} 
            keyExtractor={(item) => item} 
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>} 
            renderSectionHeader={({section})=>(<Text style={styles.sectionHeader}>{section.title}</Text>)}/>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  item: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  sectionHeader: {
    backgroundColor: '#494949ff',
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  }
});

export default SectionListScreen;