import React from 'react'
import styled from "styled-components";

type TProps = {
  src?: string ,
}

export const StyledIcon = styled.img<TProps>`
  width: 1.5rem;
  height: 1.5rem;
`;

export const Icon: React.FC<TProps> = ({src}) => {
  return (
    <>
      <StyledIcon src={src} />
    </>
  )
};
