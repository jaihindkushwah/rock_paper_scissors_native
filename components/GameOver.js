import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useDispatch, useSelector } from 'react-redux'
import { computerScoreSelector, playerScoreSelector, setComputerScore, setMoves, setPlayerScore } from '../Redux/gameSlice'



const GameOver = () => {
    const playerScore=useSelector(playerScoreSelector);
    const computerScore=useSelector(computerScoreSelector);
    const dispatch=useDispatch();
    const restartHandler=()=>{
        dispatch(setComputerScore(0));
        dispatch(setPlayerScore(0));
        dispatch(setMoves(10));
    }
  return (
    <View style={tw`flex-1 w-full bg-blue-300 justify-center items-center gap-y-10 rounded-t-2xl mt-10`}>
      <View style={tw`flex justify-center items-center`}>
        <Text style={tw`text-2xl font-normal`}>Game Over !</Text>
      </View>
      <View style={tw`flex justify-center items-center`}>
        <Text style={tw`text-2xl font-medium`}>
            {
              playerScore===computerScore ? "Match Tied !!"
              :playerScore < computerScore ? "Computer Won The Game !!"
              : "You Won The Game !!"
            }
        </Text> 
        
      </View>
      <View style={tw`flex flex-row gap-x-1`}>
        <TouchableOpacity onPress={restartHandler} style={tw`p-4 pr-6 pl-6 bg-green-400 rounded-full`}>
            <Text style={[tw`text-2xl`]}>Restart</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default GameOver

const styles = StyleSheet.create({})