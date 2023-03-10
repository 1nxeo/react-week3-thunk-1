import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"


// 2개의 INPUT
// (1) 이름 : 의미는 크게 없음
// (2) 함수
export const __addNumber = createAsyncThunk(
    "ADD_NUMBER_WAIT",
    (payload, thunkAPI)=>{
        // 수행하고 싶은 동작 : 3초를 기다리게 할 예정
        setTimeout(()=>{
            thunkAPI.dispatch(addNumber(payload))
        },3000)
    }
)

export const __minusNumber = createAsyncThunk(
    "MINUS_NUMBER_WAIT",
    (payload, thunkAPI)=>{
        // 수행하고 싶은 동작 : 3초를 기다리게 할 예정
        setTimeout(()=>{
            thunkAPI.dispatch(minusNumber(payload))
        },3000)
    }
)

const initialState = {
    number:0,
}

const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers:{
        addNumber: (state,action) => {
            //로직을 만듦, 동시에 액션크리에이터
            state.number = state.number + action.payload
        },
        minusNumber: (state,action)=> {
            state.number = state.number - action.payload
        },
    }
})

// action creator 와 reducer를 각각만들어줄 필요 없이 API 만 호출하면 된다.

export default counterSlice.reducer
export const {addNumber, minusNumber} = counterSlice.actions