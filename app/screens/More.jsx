import { Image } from 'expo-image';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

export default function More() {

  const {param} = useLocalSearchParams();

  let bookData = null;
  try {
    bookData = param ? JSON.parse(param) : null
  } catch (error) {
    console.warn("Failed to parse book data", error)
  }

  return (
    <>
    <Image 
 source={{uri: bookData.cover}}
 style={{ width:"100%", height:380}}

/>
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>

   <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}> 


<Text style={{fontSize:20, fontWeight:"900"}}>{bookData.title}</Text>
<Text style={{fontSize:20, fontWeight:"700"}}>BY:{bookData.author}</Text>

<Text style={{fontSize:18, fontWeight:"500", marginTop:10}}>{bookData.desc}</Text>


   </ScrollView>
  

    </SafeAreaView>
     <View style={{height:70, display:"flex", flexDirection:"row", justifyContent:"space-between", width:"100%", backgroundColor:"gray", alignItems:"center", borderTopLeftRadius:12, borderTopRightRadius:12}}>
     <Text> Buy {bookData.title}</Text>
     <View style={{height:35, backgroundColor:"blue", borderRadius:8, width: "30%", alignItems:"center" ,alignSelf:"center"}}><Text style={{fontSize:18, fontWeight:"500", }}>Purchase</Text></View>
    </View>
    </>
  )
}