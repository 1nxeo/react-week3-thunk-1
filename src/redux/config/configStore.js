// 중앙 데이터 관리소 (State)를 설정하는 부분

import { configureStore } from "@reduxjs/toolkit"
import counter from "../modules/counterSlice"


// ASIS : 일반 리듀서
// const rootReducer = combineReducers({
//     //modules 내의 state의 묶음들을 객체 형태로 몰아 넣어줄 것이다.
//     counter, users
// })
// const store = createStore(rootReducer)


// TODO : Redux toolkit
//configureStore 하나만으로 store를 만들 수 있음
const store = configureStore({
    //reducer가 들어가게 됨
    reducer:{
        counter:counter,
    }
})

export default store