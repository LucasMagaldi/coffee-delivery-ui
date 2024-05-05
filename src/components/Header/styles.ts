import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 2rem 10rem;
    cursor: pointer;
`

export const Action = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`

export const Location = styled.button`
    display: flex;
    padding: 0.5rem 1rem;
    gap: 1rem;
    background: ${props => props.theme['purple-light']};

    text-align: center;
    align-items: center;
    border: none;
    border-radius: 10%;
    cursor: pointer;

    span {
        color: ${props => props.theme['purple-dark']};
        font-weight: 400;
    }
`

export const CoffeeCart = styled.button`
    padding: 0.5rem 1rem;
    background: ${props => props.theme['yellow-light']};
    border: none;
    cursor: pointer;
`