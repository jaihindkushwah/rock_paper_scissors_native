import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { useDispatch, useSelector } from 'react-redux'
import { computerScoreSelector, movesSelector, playerScoreSelector, setComputerScore, setMoves, setPlayerScore } from '../Redux/gameSlice'

const GameStart = () => {
    const [result,setResult]=useState("");
    const playerScore=useSelector(playerScoreSelector);
    const computerScore=useSelector(computerScoreSelector);
    const moves=useSelector(movesSelector);
    const dispatch=useDispatch();

    const playHandler=(player)=>{
        const options=['rock','paper','scissors'];
        const randIndex=Math.floor(Math.random()*3);
        const computer=options[randIndex];
        winner(player,computer);
    }

    const winner=function(player,computer){
        if(player===computer){
            setResult("Tie!");
        }
        else if(player==='rock'){
            if(computer==='paper'){
                setResult("Computer Won !");
                dispatch(setComputerScore(computerScore+1));
            }
            else{
                setResult("You Won !");
                dispatch(setPlayerScore(playerScore+1));
            }
        }
        else if(player==='paper'){
            if(computer==='scissors'){
                setResult("Computer Won !");
                dispatch(setComputerScore(computerScore+1));
            }
            else{
                setResult("You Won !");
                dispatch(setPlayerScore(playerScore+1));
            }
        }
        else if(player==='scissors'){
            if(computer==='rock'){
                setResult("Computer Won !");
                dispatch(setComputerScore(computerScore+1));
            }
            else{
                setResult("You Won !");
                dispatch(setPlayerScore(playerScore+1));
            }
    
        }
        dispatch(setMoves(moves-1));
    }


  return (
    <View style={tw`flex-1 w-full bg-blue-300 justify-center items-center gap-y-10 rounded-t-2xl mt-10`}>
      <View style={tw`flex justify-center items-center`}>
        <Text style={tw`text-2xl font-medium`}>Chose Your Move</Text>
        <Text style={[tw`font-medium`,{fontSize:18}]}>Move Left : {moves}</Text>
      </View>
      <View style={tw`flex flex-row gap-x-1`}>
        <TouchableOpacity onPress={()=>{playHandler('rock')}} style={tw`p-5 pr-6 pl-6 bg-green-400 rounded-full`}>
            <Text style={[tw`text-2xl`,{}]}>Rock</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{playHandler('paper')}} style={tw`p-5 pr-6 pl-6 bg-green-400 rounded-full`}>
            <Text style={[tw`text-2xl`,{}]}>Paper</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{playHandler('scissors')}} style={tw`p-5 pr-6 pl-6 bg-green-400 rounded-full`}>
            <Text style={[tw`text-2xl`,{}]}>Scissors</Text>
        </TouchableOpacity>
      </View>
    <Text style={{fontWeight:500,fontSize:20}}>{result}</Text>
    </View>
  )
}

export default GameStart

const styles = StyleSheet.create({})