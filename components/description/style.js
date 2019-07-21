import styled from 'styled-components'

const Container = styled.div`
    max-width: 560px;
    width: 100%;
`

const H2 = styled.h2`
    font-size: 55px;
    line-height: 70px;
    font-weight: 500;
`

const Button = styled.button`
    background: var(--button);
    width: 210px;
    height: 50px;
    border-radius: 25px;
    border: none;
    color: var(--white);
    font-size: 18px;
    margin-top: 20px;

    &:hover {
        background: var(--button-on-hover);
    }
`

export {
    Container,
    H2,
    Button,
}