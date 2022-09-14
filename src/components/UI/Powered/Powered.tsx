import React from 'react'
import { Flex } from '../Flex/Flex';
import { StyledWrapper, StyledText, StyledIcon } from './styled';

export type TProps = {
  src?: string ,
}

export const Powered: React.FC<TProps> = ({src}) => {

  return (
    <>
    <StyledWrapper>
      <Flex justify='center' gap='5px'>
          <StyledText>
            POWERED BY
          </StyledText>
          <StyledIcon src={src} />
      </Flex>
    </StyledWrapper>
    </>
  )
};



export const Icon: React.FC<TProps> = ({src}) => {
  return (
    <>
      <StyledIcon src={src} />
    </>
  )
};
