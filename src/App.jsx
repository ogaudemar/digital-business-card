import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      
      <header>
        <img src='/src/assets/odg.jpg' className="headshot" alt="odd headshot" />
      </header>
      <main>
        <div className="contacts">
          <h1 className='name'>Ohdeegee</h1>
          <h2 className='title'>Fullstack product maker</h2>
          <p className='website'>subo.ai</p>
          <div className='buttons'>
            <a href="mailto:odg@clearswell.com" className='links' id='Email'><img src="/src/assets/Mail.png"/>Email</a>
            <a href="https://linkedin.com/in/ogaudemar" className='links' id='LinkedIn'><img src="/src/assets/linkedin.png"/>LinkedIn</a>
          </div>
        </div>        
      <div className="bio">
        <h3>About</h3>
        <p>I like to build interesting products that solve real business issues. Currently learning development while bootstrapping a new app. Previous roles in product management, leadership, marketing, procurement at the intersection of tech and marketing research.</p>
        <h3>Interests</h3>
        <p>Learning new things and cultures. Sports. Music. Cooking. Travel. </p>
      </div>
      </main>
      <footer>
        <a className="social" href="https://x.com/ogaudemar"><img src="/src/assets/Twitter.png"/></a>
        <a className="social" href="https://instagram.com/olivdeg"><img src="/src/assets/Instagram.png"/></a>
        <a className="social" href="https://github.com/ogaudemar"><img src="/src/assets/Github.png"/></a>
      </footer>

    </>
  )
}

export default App
