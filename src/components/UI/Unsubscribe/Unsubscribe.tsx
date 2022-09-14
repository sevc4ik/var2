import React from 'react'
import { Flex } from '../Flex/Flex';
import { StyledWrapper, StyledUnscbText, StyledUnscbButton } from './styled';

type TPrepProps = {
    prepArray?: string[],
}

export const Unsubscribe: React.FC<TPrepProps> = ({ prepArray }) => {

  return (
    <>
    <StyledWrapper>
      <Flex gap='5px' direction='column'>
          <StyledUnscbText>
            This message has been sent by Velox Imaging on behalf of MyHealth Centres to 416 666 7777.
          </StyledUnscbText>
          <StyledUnscbButton>Opt-out of SMS reminders</StyledUnscbButton>
      </Flex>
    </StyledWrapper>
    </>
  )
};