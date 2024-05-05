import styled from 'styled-components'

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
    height: 20rem;
    width: 52rem;
`

export const DeliveryDetailHeader = styled.div`
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

