import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Video from './components/VideoPlayer/Video'
function App() {
  const [playstate,setplaystate] = useState(false);
  
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className='container'>
      <Title subtitle='Our Program' title='What We Offer'></Title>
      <Programs></Programs>
      <About setplaystate={setplaystate}></About>
      <Title subtitle='Gallery' title='Campus Photos'></Title>
      <Campus></Campus>
      <Title subtitle='Testimonials' title='What Student Says'></Title>
      <Testimonials></Testimonials>
      <Title subtitle='Contact Us' title='Get in Touch'></Title>
      <Contact></Contact>
      <Footer></Footer>
      </div> 
      <Video playstate={playstate} setplaystate={setplaystate}></Video>
    </div>
  )
}

export default App
