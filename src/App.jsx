import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'

function App() {
  return (
    <main>
      <Header />
      <div className="card-wrapper">
        <Card />
      </div>
      <div class="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Gesiere Tarasele</a>.
      </div>
    </main>
  )
}

export default App
