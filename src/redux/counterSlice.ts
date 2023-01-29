import { createSlice } from '@reduxjs/toolkit';
/**
  * reducers設定 / 関数increase, decrease
  * createSlice({挙動まるごとの引数})
    * name
    * initialState
    * reducers
 */

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { // 初期値
    count: 0, // 変数
  },
  reducers: {
    // 関数で定義 / キー：（引数）=> { 引数の挙動 アクション}
    increase: (state) => {
      state.count += 1;  // 引数.変数 = 挙動
    },
    decrease: (state) => {
      state.count -= 1;
    },
  },
});

/**
  * redux Toolkitでは自動で同名のAction creatorsを作成
  * Action creatorsをdispatchで指定する
 */
export const { increase, decrease } = counterSlice.actions;
export default counterSlice.reducer;