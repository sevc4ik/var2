import React, { useState } from 'react'
import { Flex } from '../Flex/Flex';
import { Icon } from '../Icon/Icon';
import { Content, StyledLocationAddress, RotateIcon, StyledDay, StyledTime } from './styled';

export type TCollapsProps = {
    headingText?: string,
    icon?: string,
    expandIcon?: string,
    options?: string[],
    defaultOption?: string,
    open?: boolean
}

export const Collapse: React.FC<TCollapsProps> = ({ icon, headingText, expandIcon, options, defaultOption }) => {
  const [open, setOpen] = useState(false);
  return (
    <Flex margin='2rem 0 0 0' direction='column' gap='10px'>
      <div onClick={() => setOpen(!open)}>
        <Flex justify='space-between'>
          <Flex align='center' gap='0.5rem'>
            <Icon src={icon} />
            <StyledLocationAddress>{ headingText }</StyledLocationAddress>
          </Flex>
          <RotateIcon open={open} src={expandIcon} />
        </Flex>
      </div>
      <Content open={open}>
        <Flex justify='space-between'>
          <StyledDay>Monday — Friday</StyledDay>
          <StyledTime>9AM - 7PM</StyledTime>
        </Flex>
        <Flex justify='space-between'>
          <StyledDay>Saturday — Sunday</StyledDay>
          <StyledTime>10AM - 4PM</StyledTime>
        </Flex>
      </Content>
      <Content open={!open}>
        <Flex justify='space-between'>
          <StyledDay>Friday</StyledDay>
          <StyledTime>9AM - 7PM</StyledTime>
        </Flex>
      </Content>
    </Flex>
  )
};





