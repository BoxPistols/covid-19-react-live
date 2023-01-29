import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
// import Counter from "./components/Counter"
import { store } from "./redux/store"
import { Provider } from "react-redux"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Counter /> */}
      <hr />
      <App />
    </Provider>
  </React.StrictMode>
)
