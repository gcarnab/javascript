//import "./App.css" //applied to all components
import Navbar from "./Navbar"
import Home from "./Home"

function App() {
  return (
    <div className="App">
      {/*jsx component use className
      jsx convert to class html attribute
    */}
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  )
}

export default App //imported in index.js
