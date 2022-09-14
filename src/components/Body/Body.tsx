import React, { useEffect, useState } from "react";
import { AppointmentMainInfo } from "../UI/AppointmentMainInfo/AppointmentMainInfo";
import { AppWrapper } from "../UI/AppWrapper/AppWrapper";
import { Title } from "../UI/Title/Title";
import { Preparations } from "../UI/Preparations/Preparations";
import { Location } from "../UI/Location/Location";
import { Collapse } from "../UI/Collapse/Collapse";

import veloxLogo from "../../assets/icons/logo.svg"
import calendarIcon from "../../assets/icons/calendar.svg"
import websiteIcon from "../../assets/icons/globe.svg"
import phoneIcon from "../../assets/icons/phone.svg"
import locationIcon from "../../assets/icons/location.svg"
import clockIcon from "../../assets/icons/clock.svg"
import collapseIcon from "../../assets/icons/Arrow.svg"
import styled, { css } from "styled-components";
import { Unsubscribe } from "../UI/Unsubscribe/Unsubscribe";
import { Powered } from "../UI/Powered/Powered";
import { Flex } from "../UI/Flex/Flex";
import { AppConfirm } from "../AppConfirm";
import { Top } from "../Top";

export type TBody = {
  test?: boolean,
}

export const StyledConfirmText = styled.div`
  font-size: 1rem;
  font-weight: 600;
`

export const StyledConfirmSub = styled.div`
  font-size: 1rem;
`

export const Wrapper = styled.div`
  position: relative;
  min-width: 16rem;
  display: block;
   @media ${props => props.theme.device.mobile} {
    display: none;
  }
`

export const LeftWrapper = styled.div`
  @media ${props => props.theme.device.mobile} {
    width: 100%;
  }
`

export const Content = styled.div<TBody>`
  max-height: 0;
  background-color: ${props => props.theme.color.primary}12;
  text-align: center;
  opacity: 0;
  overflow: hidden;
  transition: all 1s ease;
  ${({ test }) =>
    test &&
    css`
      overflow: auto;
      max-height: 100%;
      padding: 1.25rem;
      border-radius: 0.5rem;
      margin-bottom: 2rem;
      opacity: 1;
  `}
`

export const Body: React.FC<TBody> = ({ test }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [height, setHeight] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () =>
      window.removeEventListener("scroll", listenToScroll);
  }, [])

  const listenToScroll = () => {
    const h = document.getElementById('phone')?.getBoundingClientRect().top;
    const winScroll = document.body.scrollTop ||
      document.documentElement.scrollTop;

    setHeight(winScroll);
    if (h) {
      console.log(h + winScroll)
      if (winScroll > h + winScroll) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };
  const preparations = [
    'A full bladder is necessary. Finish drinking 1 litre (40 oz) of clear fluid 1 hour before the exam. Do not empty your bladder. 45 to 75 min test.',
    'NO CAFFEINE 24 hours prior. No food or dairy 1 hour prior. 120 to 150 min test.'

  ]
  return (
    <AppWrapper>
      <>
        {
          isVisible &&
          <Top
            appDate='Fri, 2:00 PM'
            appTime='3 Dec 2021'
            test={false}
          />
        }
        <Title>Your Appointment</Title>
        <Content test={test}>
          <StyledConfirmText>Thank you for confirming your appointment.</StyledConfirmText>
          <StyledConfirmSub>We look forward to seeing you at the clinic.</StyledConfirmSub>
        </Content>
        <AppointmentMainInfo
          id='phone'
          mainText="Fri, 3 Dec-2021, 2:00 PM"
          icon={calendarIcon}
        />
        <AppointmentMainInfo
          mainText="+705 434 0074"
          secondText="Please call if you want to change or cancel"
          icon={phoneIcon}
        />
        <AppointmentMainInfo
          href="https://myhealthcentre.ca/"
          linkText="myhealth.ca"
          icon={websiteIcon}
        />
        <Preparations
          id='prep'
          prepArray={preparations}
        />
        <Location
          addressText="117 Young St, Unit 21, L9R 0E9"
          secondText="Here should be a long or short text description of the best and clearest way to get to us."
          icon={locationIcon}
        />
        <Collapse
          headingText="Hours of Operation"
          icon={clockIcon}
          expandIcon={collapseIcon}
        />
        <Unsubscribe />
        <Powered
          src={veloxLogo}
        />
      </>
    </AppWrapper>
  );
}

