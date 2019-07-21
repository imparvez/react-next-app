import styled from 'styled-components'

const Nav = styled.nav`
    margin-right: 40px;

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

export {
    Nav
}