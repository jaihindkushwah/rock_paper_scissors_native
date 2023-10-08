import { SafeAreaView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/themed'
import { useDispatch } from 'react-redux'
import { setPlayerName } from '../Redux/gameSlice'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

  const navigation=useNavigation();
  const [inputName,setInputName]=useState("");
  const dispatch=useDispatch();

  const showToast=()=>{
        ToastAndroid.show("Please Enter your name !",ToastAndroid.SHORT);
  }
  const handleInput=()=>{
    if(!inputName){
      showToast();
      return;
    }
    dispatch(setPlayerName(inputName));
    navigation.navigate('Game Screen');

}
const guestHandler=()=>{
    dispatch(setPlayerName("Guest"));
    navigation.navigate('Game Screen');
}

  return (
    <SafeAreaView>
      <View style={tw`flex justify-center items-center h-full`}>
        <View style={tw`font-black pt-0.5 text-2xl w-10/12 text-center flex flex-col items-center`}>

          <TextInput
            onChangeText={setInputName}
            value={inputName}
            caretHidden
            style={tw`bg-blue-100 font-black pt-0.5 text-2xl h-20 w-full text-center`}
            placeholder='Enter your name:'
          />
          <TouchableOpacity
            onPress={handleInput}
          >
            <Icon
            style={tw`p-2 bg-black rounded-full mt-4 w-10`}
            type='antdesign'
            name='arrowright'
            color={'white'}
          />
        </TouchableOpacity>
        </View>
        <Text style={tw`mt-4 mb-4 text-2xl rounded-full p-4 pl-5 pr-5 font-bold`}>
          Or
        </Text>
        <TouchableOpacity onPress={guestHandler}  style={tw`p-5 rounded pl-8 pr-8 bg-gray-300`}>
            <Text style={tw`tracking-wide text-2xl font-semibold`}>
              Continue as Guests
            </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})