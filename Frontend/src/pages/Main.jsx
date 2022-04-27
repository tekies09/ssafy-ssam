import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Signup from './Signup'

const mainScreen = (<>
  <div>
    <p>메인 화면</p>
  </div>
</>)


export default function RouteList() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={mainScreen} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </Router>
    
  )
}
