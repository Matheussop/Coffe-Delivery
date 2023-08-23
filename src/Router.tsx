import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Header } from './components/Header'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}
