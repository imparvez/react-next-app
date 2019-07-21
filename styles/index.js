import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    
    &:first-child {
        margin-top: 75px;
    }
`

const FeatureListContainer = styled.ul`
    max-width: 325px;
    width: 100%;
    list-style-type: none;

    &:last-child {
        padding-left: 30px;
    }
`

const FeatureList = styled.li`
    margin-bottom: 30px;
`

const Title = styled.h3`
    margin: 60px 0 0;
    text-align: center;
    font-size: 40px;
    font-weight: 500;
`

export {
    Section,
    FeatureListContainer,
    FeatureList,
    Title,
}

