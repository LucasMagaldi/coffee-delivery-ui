import {
	FocusEvent,
	HTMLAttributes,
	InputHTMLAttributes,
	LegacyRef,
	forwardRef,
	useState,
} from 'react'

import { FieldError } from 'react-hook-form'
import { Box, Container, ErrorMessage } from './styles'

type Props = InputHTMLAttributes<HTMLInputElement> & {
    optional?: boolean
    containerProps?: HTMLAttributes<HTMLDivElement>
    error?: FieldError
}

export const TextInput = forwardRef(function TextInput(
	{ optional, error, onFocus, onBlur, ...rest }: Props,
	ref: LegacyRef<HTMLInputElement>,
) {
	const [isFocused, setIsFocused] = useState(false)

	function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
		setIsFocused(true)
		onFocus?.(event)
	}

	function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
		setIsFocused(false)
		onBlur?.(event)
	}

	return (
		<Box>
			<Container data-state={isFocused ? 'focused' : 'blurred'}>
				<input
					type="text"
					onFocus={handleFocus}
					onBlur={handleBlur}
					ref={ref}
					{...rest}
				/>
				{error?.message ? (
					<ErrorMessage role="alert">{error.message}</ErrorMessage>
				) : null}
				{optional ? <span>Opcional</span> : null}
			</Container>


		</Box>
	)
})