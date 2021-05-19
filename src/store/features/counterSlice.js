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
        }
    }
});

export const {previousQuestion, nextQuestion} = counterSlice.actions;

export default counterSlice.reducer;