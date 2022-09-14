
import styled from "styled-components"

export const StyledWrapper = styled.div`

  padding: 1rem 0;
  background: #F9F9F9;
  margin-top: 1.5rem;
`
export const StyledUnscbText = styled.p`
  color: #313131;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
`
export const StyledUnscbButton = styled.button`
  font-family: Inter;
  cursor: pointer;
  background: none;
  border: none;
  color:  ${props => props.theme.color.primary};;
  text-decoration: underline;
  font-size: 0.875rem;
  line-height: 1.25rem;
  &:active {
    filter: brightness(80%);
  }
`