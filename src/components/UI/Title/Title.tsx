import { Button } from 'antd'
import React from 'react'
import styled, { css } from "styled-components";

type TProps = {
    children?: React.ReactNode,
}

const StyledTitle = styled.h1<TProps>`
  font-size: 1.75rem;
  line-height: 1.75rem;
  font-weight: 600;
  letter-spacing: 0.25px;
  margin: 1.5rem 0;
`

export const Title: React.FC<TProps> = (props) => {
  return (
  <StyledTitle id='title' {...props} />
  )
};
