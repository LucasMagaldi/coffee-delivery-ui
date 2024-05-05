import { Action, CoffeeCart, Container, Location } from './styles'
import logo from '../../assets/logo.svg'
import { defaultTheme } from '../../styles/themes/deafault'

import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function Header() {
	return (
		<Container>
			<img src={logo} alt="" />
			<Action>
				<Location>
					<MapPin size={22} color={defaultTheme['purple-dark']} weight='bold' />
					<span>Curitiba, PR</span>
				</Location>
				<CoffeeCart>
					<ShoppingCart size={22} color={defaultTheme['yellow-dark']} />
				</CoffeeCart>
			</Action>
		</Container>
	)
}