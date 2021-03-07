import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Button } from '../components/Button'
import ErrorBg from '../assets/images/404_error_template.jpg'
import Aos from 'aos'
import "aos/dist/aos.css"
import Metadata from "../components/metadata"

const NotFoundPage = () => {

  useEffect(() => {
    Aos.init({})
  }, [])
  
  return (
    <ErrorContainer>
      <Metadata title="404" description="Page not found" />
      <ErrorContent>
        {/* <h1>404</h1>
        <p>Oh no! Page not found!</p> */}
        <h1>Try to access the Home Page</h1>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <Button to="/" round="true" big="true">Return Home</Button>
      </ErrorContent>

    </ErrorContainer>
  )
}

export default NotFoundPage

const ErrorContainer = styled.div`
  background: url(${ErrorBg});
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  width: 100%;
  color: #fff;
  
}
`

const ErrorContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
      text-align: center;
      margin-bottom: 1rem;
      font-size: clamp(1rem, 5vw, 3rem);
      padding: 0 1rem;
  }

  p {
      text-align: center;
      font-size: clamp(1rem , 2.5vw, 1.5rem);
      padding: 0 1rem;
      margin-bottom: 2rem;
  }

  form {
      z-index: 10;
  }
`