import { MapPinLine } from '@phosphor-icons/react';
import { Container, DeliveryDetail, DeliveryDetailForm, DeliveryDetailHeader, OrderSection } from './styles';
import { defaultTheme } from '../../styles/themes/deafault';
import { Input } from '../../styles/common';

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
					<DeliveryDetailForm>
						<Input width={16} placeholder='CEP' name='cep' type='text' />
						<Input width={32} placeholder='Logradouro' name='logradouro' type='text' />
						<div>
							<Input width={12} placeholder='Número' name='numero' type='number' />
							<Input width={32} placeholder='Complemento' name='complemento' type='text' />
						</div>
						<div>
							<Input width={12} placeholder='Bairro' name='bairro' type='text' />
							<Input width={32} placeholder='Cidade' name='cidade' type='text' />
							<Input width={2} placeholder='UF' name='uf' type='text' />
						</div>
					</DeliveryDetailForm>
				</DeliveryDetail>
			</OrderSection>
		</Container>
	);
}