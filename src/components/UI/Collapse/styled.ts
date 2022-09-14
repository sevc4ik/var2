import { StyledIcon } from './../Icon/Icon';
import { TCollapsProps } from './Collapse';
import styled, { css } from "styled-components"


export const StyledLocationAddress = styled.div`
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 500;
`

export const StyledLocationSecond = styled.div`
  font-size: 0.875rem;
  line-height: 1.5rem;
`
export const StyledDay = styled.div`
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: #1A1C19;
`

export const StyledTime = styled(StyledDay)`
  color: #505050;
`

export const Content = styled.div<TCollapsProps>`
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.4s ease;
  ${({ open }) =>
    open &&
    css`
      overflow: auto;
      max-height: 100%;
      opacity: 1;
  `}
`

export const RotateIcon = styled.img<TCollapsProps>`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.4s ease;
  ${({ open }) =>
    open &&
    css`
      transform: rotate(180deg);
  `}
`;
