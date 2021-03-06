import React, {useState} from "react"
import Header from "./Header"
import { GlobalStyle } from "./styles/GlobalStyles"
import Footer from './Footer'
import DropDown from "./DropDown"

const Layout = ({ children }) => {
  
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () =>{

    setIsOpen(!isOpen)
  }
  return (
    <>
      <GlobalStyle />
      <DropDown isOpen={isOpen} toggle={toggle}/>
      <Header toggle={toggle}/>
      <main>{children}</main>  
      <Footer />
    </>
  )
}


export default Layout
