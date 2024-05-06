import './App.css'
import 'typeface-poppins'
import About from './components/About'
import OurApproach from './components/OurApproach'
import OurMission from './components/OurMission'

function App() {

  return (
    <>
     <div className='w-full bg-white'>
     <About/>
     <OurMission/>
     <OurApproach/>
     </div>
    </>
  )
}

export default App
