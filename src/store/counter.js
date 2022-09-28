import { createSlice } from "@reduxjs/toolkit";

const CounterInitialState = {
    counter : 0,
    showCounter : true
}

const counterSlice = createSlice({
    name : 'counter',
    initialState : CounterInitialState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter = state.counter + action.payload
        },
        toggle(state){
            state.showCounter = !state.showCounter
        }
        
    }
})
export const counterAction = counterSlice.actions;
export default counterSlice.reducer;