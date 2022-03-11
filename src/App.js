import React, { useRef } from 'react'
import "./App.css"
import NavBar from './Components/NavBar/NavBar'
import About from './Screens/About/About'
import Clients from './Screens/Clients/Clients'
import Contact from './Screens/Contact/Contact'
import Home from './Screens/Home/Home'
import Services from './Screens/Service/Services'

const App = () => {

  const home = useRef(null)
  const about = useRef(null)
  const service = useRef(null)
  const client = useRef(null)
  const contact = useRef(null)

  const homescroll = () => home.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const aboutscroll = () => about.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const servicescroll = () => service.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const clientscroll = () => client.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const contactscroll = () => contact.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (


    <>
      <Home home={home} homescroll={homescroll} aboutscroll={aboutscroll} servicescroll={servicescroll} clientscroll={clientscroll} contactscroll={contactscroll} />
      <About about={about} />
      <Services service={service} />
      <Clients client={client} />
      <Contact contact={contact} />


    </>
  )
}

export default App