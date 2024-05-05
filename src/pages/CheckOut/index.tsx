import { MapPinLine } from '@phosphor-icons/react';
import { Container, DeliveryDetail, DeliveryDetailHeader, OrderSection } from './styles';
import { defaultTheme } from '../../styles/themes/deafault';

export function CheckOut() {
	return (
		<Container>
			<OrderSection>
				<span>Complete seu pedido</span>
				<DeliveryDetail>
					<DeliveryDetailHeader>
						<MapPinLine color={defaultTheme['yellow-dark']} size={22} />
						<div>
							<span>Endereço da Entrega</span>
							<span>Informe o endereço onde deseja receber seu pedido</span>
						</div>
					</DeliveryDetailHeader>
				</DeliveryDetail>
			</OrderSection>
		</Container>
	);
}