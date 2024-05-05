import styled from 'styled-components'

interface InputProps {
    width: number
}

export const Input = styled.input<InputProps>`
    width: ${props => props.width}rem;
    height: 2rem;
    padding: .2rem .5rem;
    background: ${props => props.theme['base-input']};
    border: 1px solid ${props => props.theme['base-button']};
    border-radius: 10px;
`