import styled from 'styled-components'

interface PaymentButtonProps {
    active?: boolean
}

export const Container = styled.div`
    padding: 2rem 10rem;
    display: flex;
`

export const OrderSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    span {
        font-weight: bold;
    }
`

export const DeliveryDetail = styled.div`
    padding: 2rem;
    background: ${props => props.theme['base-card']};
    border-radius: 10px;
    height: 18rem;
    width: 42rem;
`

export const Header = styled.div`
    display: flex;
    gap: 0.5rem;
    div {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        span {
            color: ${props => props.theme['base-subtitle']};
            font-weight: normal;
        }

        :last-child {
            color: ${props => props.theme['base-title']};
            font-size: 0.9rem;
        }
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const FormContent = styled.div`
    margin-top: 1.5rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
        display: flex;
        gap: 0.8rem;
    }
`
export const PaymentDetail = styled.div`
    padding: 2rem;
    background: ${props => props.theme['base-card']};
    border-radius: 10px;
    height: 10rem;
    width: 42rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const PaymentButton = styled.button<PaymentButtonProps>`
    padding: 1rem;
    width: 16rem;
    background: ${props => props.theme['base-input']};
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 0.9rem;
    border: 1px solid ${props => props.theme['base-button']};
    border-radius: 10px;
    cursor: pointer;
    color: ${props => props.theme['base-text']};

    &:hover {
        background: ${props => props.theme['purple-light']};
        border: 1px solid ${props => props.theme['purple-dark']};
    }
`