import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react';
import { Container } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	isSelected: boolean
}

export const Radio = forwardRef(function Radio(
	{ children, isSelected, ...props }: Props,
	ref: LegacyRef<HTMLInputElement>
) {
	return (
		<Container data-state={isSelected}>
			<input type='radio' {...props} ref={ref} />
			{children}
		</Container>
	)
})