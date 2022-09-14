import { Button } from 'antd'
import React from 'react'
import styled, { css } from "styled-components";

type TProps = {
    children?: React.ReactNode,
}

const StyledClinicName = styled.div<TProps>`
  font-size: 1rem;
  max-width: 50%;
`

export const ClincName: React.FC<TProps> = (props) => {
  return (
  <StyledClinicName {...props} />
  )
};
