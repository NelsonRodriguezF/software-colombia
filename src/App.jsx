
import '../public/img/logo.png'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Hero } from './components/hero/Hero';

function App() {
  
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Hero />} />
        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
