import React, { useState } from 'react'
import { AuthProvider } from './context/AuthContext'
import RouterComponent from './components/Router'

function App() {

  return (
    <>
      <AuthProvider>
        <RouterComponent />
      </AuthProvider>
    </>
  )
}

export default App
