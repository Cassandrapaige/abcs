import styled from 'styled-components'

export const ListItem = styled.li`
font-size: 19px;
font-weight: 300;
cursor: pointer;
padding: 3px 0;
`

export const Letter = styled.span`
color: ${({contrast}) => contrast};
padding-right: 6px;
`