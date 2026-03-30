import './index.css'
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Experience from './Components/Experience'
import Works from './Components/Works'
import Form from './Components/Form'

export default function App (){
  return (
    <div>
      <Header/> 
      <Home/>
      <About/>
      <Experience/>
      <Works/>
      <Form/>
      
    </div>

  )
}