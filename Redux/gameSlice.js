const { createSlice } = require("@reduxjs/toolkit");

const initialState={
    playerScore:0,
    computerScore:0,
    moves:10,
    name:"Guest"
}


const gameSlice=createSlice({
    name:'game',
    initialState,
    reducers:{
        setPlayerScore:(state,action)=>({...state,playerScore:action.payload}),
        setComputerScore:(state,action)=>({...state,computerScore:action.payload}),
        setMoves:(state,action)=>({...state,moves:action.payload}),
        setPlayerName:(state,action)=>({...state,name:action.payload}),
    }
});

export const {setComputerScore,setMoves,setPlayerName,setPlayerScore}=gameSlice.actions;

export const gameReducer= gameSlice.reducer;

export const playerScoreSelector=(state)=>state.game.playerScore;
export const computerScoreSelector=(state)=>state.game.computerScore;
export const movesSelector=(state)=>state.game.moves;
export const playerNameSelector=(state)=>state.game.name;





