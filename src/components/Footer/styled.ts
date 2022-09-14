import { TFooter } from './Footer';
import styled, { css } from "styled-components"


export const StyledFooter = styled.footer`
  position:sticky;
  left: 0px;
  bottom: 0px;
  padding: 1rem 0;
  width: 100%;
  background: #fff;
  border-top: 1px solid #EBEBEB;
  display: none;
  @media ${props => props.theme.device.mobile} {
    display: block;
  }
`
 
export const StyledConfirmText = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`
export const StyledConfirmSub = styled.div`
  font-size: 1.25rem;
`

export const StyledDate = styled.div`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
`

export const StyledTime = styled.div`
  font-size: 0.875rem;
  line-height: 1rem;
`

export const PhoneIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  background: ${props => props.theme.color.primary}12 ;
  border-radius: 0.5rem;
  transition: all 0.3s ease; 
  &:active {
    filter: brightness(90%);
  }
`
export const StyledButton = styled.button<TFooter>`
  font-family: 'Inter';
  font-size: 1rem;
  line-height: 2.5rem;
  height: 2.5rem;
  border: none;
  background-color: ${props => props.theme.color.primary};
  padding: 0 2rem;
  color: #fff;
  font-weight: 600;
  border-radius: 0.5rem;
  transition: all 0.4s ease;
  box-sizing: border-box;
  &:hover {
    filter: brightness(90%);
  }
  cursor: pointer;
  ${({ test }) =>
    test &&
    css`
      background-color: #fff;
      border: 1px solid ${props => props.theme.color.primary};
      color: ${props => props.theme.color.primary};

      &:hover {
        filter: brightness(100%);
        background-color: #fff;
        cursor: default;
      }
  `}
  
  
  
`