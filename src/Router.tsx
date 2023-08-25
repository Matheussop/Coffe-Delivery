import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { DefaultLayout } from './pages/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
      </Route>
    </Routes>
  )
}
