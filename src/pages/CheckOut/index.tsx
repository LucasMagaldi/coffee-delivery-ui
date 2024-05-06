import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from '@phosphor-icons/react';
import { Container, DeliveryDetail, Form, FormContent, Header, OrderSection, PaymentButton, PaymentDetail } from './styles';
import { defaultTheme } from '../../styles/themes/deafault';

import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TextInput } from '../../components/TextInput';

type FormInputs = {
	cep: string
	street: string
	number: string
	fullAddress: string
	neighborhood: string
	city: string
	state: string
	paymentMethod: 'credit' | 'debit' | 'cash'
}

const order = z.object({
	cep: z.string({ invalid_type_error: 'Informe o CEP' }),
	street: z.string().min(1, 'Informe a rua'),
	number: z.string().min(1, 'Informe o número'),
	fullAddress: z.string(),
	neighborhood: z.string().min(1, 'Informe o bairro'),
	city: z.string().min(1, 'Informe a cidade'),
	state: z.string().min(1, 'Informe a UF'),
	paymentMethod: z.enum(['credit', 'debit', 'cash'], {
		invalid_type_error: 'Informe um método de pagamento',
	}),
})

export function CheckOut() {

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormInputs>({
		resolver: zodResolver(order)
	})

	const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
		console.log(data)
	}

	return (
		<Container>
			<OrderSection>
				<span>Complete seu pedido</span>
				<Form onSubmit={handleSubmit(handleOrderCheckout)} id='order'>
					<DeliveryDetail>
						<Header>
							<MapPinLine color={defaultTheme['yellow-dark']} size={22} />
							<div>
								<span>Endereço da Entrega</span>
								<span>Informe o endereço onde deseja receber seu pedido</span>
							</div>
						</Header>
						<FormContent>
							<TextInput placeholder="CEP"
								type="number"
								error={errors.cep}
								{...register('cep', { valueAsNumber: true })} />
							<TextInput
								placeholder="Rua"
								error={errors.street}
								{...register('street')}
							/>
							<div>
								<TextInput
									placeholder="Número"
									error={errors.number}
									{...register('number')}
								/>

								<TextInput
									placeholder="Complemento"
									optional
									error={errors.fullAddress}
									{...register('fullAddress')}
								/>

							</div>
							<div>
								<TextInput
									placeholder="Bairro"
									error={errors.neighborhood}
									{...register('neighborhood')}
								/>

								<TextInput
									placeholder="Cidade"
									error={errors.city}
									{...register('city')}
								/>

								<TextInput
									placeholder="UF"
									maxLength={2}
									error={errors.state}
									{...register('state')}
								/>
							</div>
						</FormContent>
					</DeliveryDetail>
					<PaymentDetail>
						<Header>
							<CurrencyDollar size={22} color={defaultTheme['purple-dark']} />
							<div>
								<span>Pagamento</span>
								<span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
							</div>
						</Header>
						<FormContent>
							<div>
								<PaymentButton type='button' active>
									<CreditCard color={defaultTheme['purple-dark']} size={22} />
									CARTAO DE CRÉDITO
								</PaymentButton>
								<PaymentButton type='button'>
									<Bank color={defaultTheme['purple-dark']} size={22} />
									CARTAO DE DÉBITO
								</PaymentButton>
								<PaymentButton type='button'>
									<Money color={defaultTheme['purple-dark']} size={22} />
									DINHEIRO
								</PaymentButton>
							</div>
						</FormContent>
					</PaymentDetail>
				</Form>
				<button type='submit' form='order'>Submit</button>
			</OrderSection>
		</Container>
	);
}