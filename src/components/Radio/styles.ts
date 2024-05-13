import styled from 'styled-components'

interface IsSelectedProps {
  active?: boolean
}

export const Container = styled.label<IsSelectedProps>`
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 6px;
  border: 1px solid transparent;
  background: ${props => props.theme['base-button']};
  color: ${props => props.theme['base-text']};
  text-transform: uppercase;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme['purple-light']};
    border: 1px solid ${props => props.theme['purple-dark']};
  }

  &[data-state='true'] {
    background-color: ${props => props.theme['purple-light']};
    border-color: ${props => props.theme.purple};
  }

  input {
    display: none;
  }
`