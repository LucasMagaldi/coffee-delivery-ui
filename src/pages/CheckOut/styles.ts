import styled from 'styled-components'

interface PaymentButtonProps {
    active?: boolean
}

export const Container = styled.div`
    padding: 2rem 10rem;
    display: flex;
    gap: 8rem;
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
    width: 50rem;
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
    width: 50rem;
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

export const SelectedCoffeeSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    span {
        font-weight: bold;
    }
`

export const CheckoutDetail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 5rem 5rem 2rem 5rem;
    background: ${props => props.theme['base-card']};
    border-radius: 10px 40px 10px 40px;
    height: 28rem;
    width: 32rem;
`

export const SelectedProduct = styled.div`
    display: flex;
    justify-content:space-between;
    img {
        height: 5rem;
    }
    padding-bottom: 2rem;
    border-bottom: 1px solid ${props => props.theme['base-button']};;

`

export const SelectedProductDetails = styled.div`
    display: flex;
    flex-direction:column;
    gap: 0.5rem;

    div {
        display: flex;
        gap: 0.5rem;
    }
`

export const HandleQuantity = styled.div`
    width: 4rem;
    height: 1rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    background:${props => props.theme['base-button']};
    border: none;

    button {
        border: none;
        display: flex;
        background: none;
    }
`

export const RemoveItemButton = styled.button`
            display: flex;
            border-radius: 5px;
            gap: 0.5rem;
            border: none;
            background: ${props => props.theme['base-button']};
            width: 6rem;
            height: 2rem;
            color: ${props => props.theme['base-text']};


            align-items: center;
            padding: 0.5rem;
            font-size: 12px;
`