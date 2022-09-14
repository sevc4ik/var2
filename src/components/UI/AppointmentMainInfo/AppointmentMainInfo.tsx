import React from 'react'
import { AppConfirm } from '../../AppConfirm';
import { Flex } from '../Flex/Flex';
import { Icon } from '../Icon/Icon';
import { StyledAppointmentMainInfo, StyledAppointmentMainInfoAdd, StyledAppointmentMainInfoLink, StyledAppointmentMainWrapper } from './styled';

type TProps = {
    mainText?: string,
    linkText?: string,
    icon?: string ,
    secondText?: string,
    href?: string,
    id?: string,
}

export const AppointmentMainInfo: React.FC<TProps> = ({ icon, mainText, linkText, secondText, href, id }) => {

  return (
    <StyledAppointmentMainWrapper id={id}>
      <Flex align='center' gap='10px'>
        <Icon src={icon} />
        { mainText && 
          <Flex width='100%' align='center' justify='space-between'>
            <StyledAppointmentMainInfo>{ mainText }</StyledAppointmentMainInfo>
            {
              id &&
              <AppConfirm
                appDate='Fri, 2:00 PM'
                appTime='3 Dec 2021'
                test={false}
              />
            }
          </Flex>
        }
        { linkText && <StyledAppointmentMainInfoLink target="_blank" href={ href }>{ linkText }</StyledAppointmentMainInfoLink> }
      </Flex>
      { secondText && <StyledAppointmentMainInfoAdd>{ secondText }</StyledAppointmentMainInfoAdd> }
      
    </StyledAppointmentMainWrapper>
  )
};





