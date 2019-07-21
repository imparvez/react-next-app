import styled from 'styled-components'

const Container = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
`

const NavBar = styled.nav`
    margin-top: 25px;

    a {
        font-size: 14px;
        margin-left: 15px;
        text-decoration: none;
        color: var(--black);
        position: relative;

        &:after {
            position: absolute;
            left: 0;
            bottom: -5px;
            content: '';
            display: inline-block;
            width: 0;
            height: 2px;
            background: #000;
            transition: width .3s;
        }

        &:hover {
            &:after {
                width: 100%;
            }
        }
    }
`

const CopyRightText = styled.p`
    margin: 25px 0 0 20px;
    font-size: 14px;
`

export {
    Container,
    NavBar,
    CopyRightText,
}