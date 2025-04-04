import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LobbyScreen from './pages/Lobby'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LobbyScreen/>} />
        
      </Routes>
    </div>
  )
}

export default App