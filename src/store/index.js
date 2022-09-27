
import { createSlice ,configureStore} from '@reduxjs/toolkit';
const initalState = {
    counter : 0,
    showCounter : true
}

const counterSlice = createSlice({
    name : 'counter',
    initialState : initalState,
    reducers:{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        increase(state,action){
            state.counter = state.counter + action.payload
        },
        toggle(state){
            state.showCounter = !state.showCounter
        }
        
    }
})

const store = configureStore({
    reducer : counterSlice.reducer
});
export const counterAction = counterSlice.actions
export default store;