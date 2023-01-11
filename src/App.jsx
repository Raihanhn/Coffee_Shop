import './App.css'
import About from './components/About'
import Home from './components/Home'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Review from './components/Review'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Menu/>
      <Review/>
    </div>
  )
}

export default App
