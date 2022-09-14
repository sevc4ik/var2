
import styled from "styled-components"

export const StyledWrapper = styled.div`
  border-top: 3px solid ${props => props.theme.color.primary };
  padding: 1rem;
  /* background: #F3FDF5; */
  background: ${props => props.theme.color.primary}12;
  border-radius: 0.5rem;
  margin-top: 1.5rem;
`

export const StyledPrepIcon = styled.div`
  font-size: 0.7rem;
  color: #fff;
  height: 1rem;
  width: 1rem;
  line-height: 1rem;
  background:  ${props => props.theme.color.primary};;
  line-height: 1rem;
  font-weight: 400;
  text-align: center;
  border-radius: 1rem;
`

export const StyledPrepIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
`

export const StyledPrepText = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
`