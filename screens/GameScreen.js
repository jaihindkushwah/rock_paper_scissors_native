import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import {computerScoreSelector, movesSelector, playerNameSelector, playerScoreSelector } from '../Redux/gameSlice'
import tw from 'twrnc'
import GameStart from '../components/GameStart'
import GameOver from '../components/GameOver'
import { Icon } from '@rneui/themed'

const GameScreen = () => {
  
  const playerName=useSelector(playerNameSelector);
  const playerScore=useSelector(playerScoreSelector);
  const computerScore=useSelector(computerScoreSelector);
  const moves=useSelector(movesSelector);

  return (
    <SafeAreaView style={tw`pt-8 flex items-center h-full w-full`}>
        <View style={tw`w-full pt-3 pb-8 bg-blue-400 rounded-b-2xl`} >
          <Text style={[tw`text-center text-3xl font-bold`,{letterSpacing:1}]}>
            Rock Paper Scissors
          </Text>
        </View>
        <View style={tw`flex flex-row w-full justify-around mt-10 pr-10 pl-10 gap-x-3`}>
            <View style={tw`flex justify-center items-center p-7 pr-9 pl-9 rounded-full bg-gray-300`}>
              <Text style={{fontSize:22,fontWeight:600}}>{playerName}</Text>
              <Text style={tw`text-2xl mt-2`}>{playerScore}</Text>
            </View>
            <View style={tw`bg-gray-300 flex justify-center items-center p-1 pr-10 pl-10 rounded-full`}>
              <Icon
                type='material'
                name='computer'
                size={50}
              />
              <Text style={tw`text-2xl`}>{computerScore}</Text>
            </View>
        </View>
        {
          moves === 0 ?<GameOver/>:<GameStart/>
        }
    </SafeAreaView>
  )
}

export default GameScreen

const styles = StyleSheet.create({})