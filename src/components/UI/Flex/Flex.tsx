import React from 'react'

import { StyledFlex } from './styled';

export type TFlexProps = {
    children?: React.ReactNode,
    direction?: string,
    align?: string,
    justify?: string,
    margin?: string,
    mHeight?: string,
    gap?: string,
    width?: string,
}

export const Flex: React.FC<TFlexProps> = (props) => {
  return (
  <StyledFlex {...props} />
  )
};
