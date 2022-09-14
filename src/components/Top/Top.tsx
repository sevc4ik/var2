import React, { useEffect, useRef, useState } from "react";
import { AppWrapper } from "../UI/AppWrapper/AppWrapper";
import { Flex } from "../UI/Flex/Flex";
import icon from "../../assets/icons/phone_footer.svg"
import { StyledDate, StyledFooter, StyledTime, PhoneIcon, StyledConfirmText, StyledConfirmSub, StyledButton } from "./styled";
import { Icon } from "../UI/Icon/Icon";
import styled, { css } from "styled-components";
import { FooterPhoneIcon } from "../UI/FooterPhoneIcon/FooterPhoneIcon";

export type TFooter = {
  appDate?: string,
  appTime?: string,
  icon?: string,
  clicked?: string,
  test: boolean,
  handleСlick?: (val: boolean) => void,
}



export const Top: React.FC<TFooter> = ({appDate, handleСlick, appTime, icon}) => {
  const [clicked, setClicked] = useState('Confirm');
  const [test, setTest] = useState(false);

  return (
    <StyledFooter>
      <AppWrapper>
        <Flex justify="space-between">
          <Flex direction="column">
            <StyledDate>{appDate}</StyledDate>
            <StyledTime>{appTime}</StyledTime>
          </Flex>
          <Flex gap="0.5rem">
            <PhoneIcon href="tel:+375298887889">
              <FooterPhoneIcon />
              {/* <Icon src={icon} /> */}
            </PhoneIcon>
              <StyledButton test={test} onClick={() => {
                setClicked('Confirmed');
                if(test === false) {
                  setTest(!test)
                  handleСlick?.(!test)}
                }
              }>{clicked}</StyledButton>
          </Flex>
        </Flex>
      </AppWrapper>
    </StyledFooter>
  );
}

