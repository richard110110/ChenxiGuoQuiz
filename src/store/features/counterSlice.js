import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 1,
        title: 'redux toolkit',
    },
    reducers: {
        previousQuestion(state, action){
            state.count = state.count - 1;
        },
        nextQuestion(state, action){
            state.count +=1;
        },
        currentQuestion(state, action){
            state.count = state.count;
        },
        currentScore(state, action){
            state.count = state.count;
        }
    }
});

export const {previousQuestion, nextQuestion, currentQuestion, currentScore} = counterSlice.actions;

export default counterSlice.reducer;