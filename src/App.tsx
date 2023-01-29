import { useSelector } from "react-redux"
import "./App.css"
import { LinePlot } from "./components/LinePlot"
import { RadarPlot } from "./components/RadarPlot"

/**
 * useSelector Hookを利用することでcounterSliceで設定したcountの値を取得
 * stateのドットの直後に設定しているcounterはstore.jsのreducerに設定したオブジェクトのプロパティのcounterを対応
 * counterSlice.jsファイルのnameで設定した”counter”ではありません。
 * countの値を取得したい場合はstate.countではなくstate.counter.countであることを注意してください。
 */

function App() {
  const count = useSelector((state: any) => {
    return state.counter.count
  })

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      {/* <header className="App-header"> */}
      <LinePlot />
      <RadarPlot />
      {/* </header> */}
    </div>
  )
}

export default App
