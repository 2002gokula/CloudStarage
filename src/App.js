import "./App.css"
import Header from "./Modules/Header/index"
import Dashboard from "./Modules/Dashboard/index"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
    </div>
  )
}

export default App
