import { HeaderContainer, ItemsQuantityContainer } from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { useContext } from 'react'

import logoIgnite from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'


export function Header() {
  const { items } = useContext(CartContext)

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
        <ItemsQuantityContainer>
          <p>{items.length}</p>
        </ItemsQuantityContainer>

      </nav>
    </HeaderContainer>
  )
}
