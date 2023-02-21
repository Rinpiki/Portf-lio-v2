import react from 'react'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import FirstSecond from './components/FirstSecond/FirstSecond'
import Header from './components/Header/Header'
import MySkills from './components/MySkills/MySkills'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <>
      <Header />
      <FirstSecond />
      <About />
      <Contact />
      <Projects />
      <MySkills />
    </>
  )
}

export default App
