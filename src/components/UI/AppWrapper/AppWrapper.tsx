import { Button } from 'antd'
import React from 'react'
import styled, { css } from "styled-components";

type TProps = {
    children?: React.ReactNode,
}

const StyledWrapper = styled.div<TProps>`
  max-width: 945px;
  margin: 0 auto;
  padding: 0 1rem;
`

export const AppWrapper: React.FC<TProps> = (props) => {
  return (
  <StyledWrapper {...props} />
  )
};
