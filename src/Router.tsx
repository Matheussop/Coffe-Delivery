import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { DefaultLayout } from './pages/DefaultLayout'
import { Success } from './pages/Success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Success" element={<Success />} />
      </Route>
    </Routes>
  )
}
