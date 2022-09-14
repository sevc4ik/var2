import React from 'react'
import Home from '../../GoogleMaps/GoogleMaps';
import { Flex } from '../Flex/Flex';
import { Icon } from '../Icon/Icon';
import { StyledLocationAddress, StyledLocationSecond } from './styled';

type TProps = {
    addressText?: string,
    icon?: string ,
    secondText?: string,
}

export const Location: React.FC<TProps> = ({ icon, addressText, secondText }) => {

  return (
    <Flex margin='2rem 0 0 0' direction='column' gap='10px'>
      <Flex align='center' gap='0.5rem'>
        <Icon src={icon} />
        <StyledLocationAddress>{ addressText }</StyledLocationAddress>
      </Flex>
      <Home />
      <StyledLocationSecond>{ secondText }</StyledLocationSecond>
    </Flex>
  )
};





