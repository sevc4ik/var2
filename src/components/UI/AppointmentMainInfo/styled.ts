import styled from "styled-components"

export const StyledAppointmentMainWrapper = styled.div`
  border-bottom: 1px solid #EBEBEB;
  padding: 0.5rem 0;
 
`

export const StyledAppointmentMainInfo = styled.div`
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 500;
`
export const StyledAppointmentMainInfoLink = styled.a`
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: ${props => props.theme.color.primary};
  text-decoration: none;
  &:active {
    filter: brightness(80%);
  }
`

export const StyledAppointmentMainInfoAdd = styled.div`
  font-size: 0.875rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: #717171;
  margin-left: calc(1.5rem + 10px);
`