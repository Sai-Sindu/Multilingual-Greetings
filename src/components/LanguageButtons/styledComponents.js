import styled from 'styled-components'

export const LanguageButtonCard = styled.li`
  background-color: transparent;
`

export const LanguageButton = styled.button`
  border: ${props => (props.isActive ? 'none' : '2px solid #db1c48')};
  color: ${props => (props.isActive ? '#ffffff' : '#db1c48')};
  border-radius: 20px;
  padding: 10px 20px 10px 20px;
  outline: none;
  cursor: pointer;
  background-color: ${props => (props.isActive ? '#db1c48' : '#ffffff')};
  margin-right: 10px;
`
