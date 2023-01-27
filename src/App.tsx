import "./App.css"
import { LinePlot } from "./components/LinePlot"
import { RadarPlot } from "./components/RadarPlot"

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <LinePlot />
      <RadarPlot />
      {/* </header> */}
    </div>
  )
}

export default App
