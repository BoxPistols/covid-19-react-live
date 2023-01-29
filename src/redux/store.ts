import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './counterSlice'
/**
 * store登録
 * 作成したcounterSliceをimport
 * configure関数の引数に設定するオブジェクトのreducerプロパティに設定
 */
export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})
