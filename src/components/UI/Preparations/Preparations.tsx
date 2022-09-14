import React from 'react'
import { Flex } from '../Flex/Flex';
import {  StyledPrepText, StyledWrapper, StyledPrepIcon, StyledPrepIconWrapper } from './styled';

type TPrepProps = {
    prepArray: string[],
    id: string,
}

export const Preparations: React.FC<TPrepProps> = ({ prepArray, id }) => {

  return (
    <>
    <StyledWrapper id={id}>
      <Flex gap='10px' direction='column'>
        { prepArray.map((prepText) => (
          <>
            <Flex gap='8px' justify='flex-start' align='flex-start'>
            <StyledPrepIconWrapper>
              <StyledPrepIcon>!</StyledPrepIcon>
            </StyledPrepIconWrapper>
              <StyledPrepText>{prepText}</StyledPrepText>
            </Flex>
          </>
        )) }
      </Flex>
    </StyledWrapper>
    </>
  )
};