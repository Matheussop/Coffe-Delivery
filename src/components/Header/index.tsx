import { HeaderContainer } from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'

import logoIgnite from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoIgnite} alt="" />
      </span>
      <nav>
        <div>
          <MapPin size={22} weight='fill'/>
          <p>Belo Horizonte, MG</p>
        </div>
        <NavLink to="/cart" title="Cart">
          <ShoppingCart size={22} weight='fill'/>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
