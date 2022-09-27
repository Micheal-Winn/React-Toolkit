
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

const authInitialState = {
    auth : false
}

const authSlice = createSlice({
    name : 'auth',
    initalState : authInitialState,
    reducers:{
        login(state){
            state.auth = true
        },
        logout(state){
            state.auth = false
        }
    }
})

const store = configureStore({
    reducer : {
        counter : counterSlice.reducer,
        auth : authSlice.reducer
    }
});
export const counterAction = counterSlice.actions
export const authActions = authSlice.actions
export default store;