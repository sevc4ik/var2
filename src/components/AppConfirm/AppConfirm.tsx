import React, { useEffect, useRef, useState } from "react";
import { AppWrapper } from "../UI/AppWrapper/AppWrapper";
import { Flex } from "../UI/Flex/Flex";
import icon from "../../assets/icons/phone_footer.svg"
import { StyledDate, StyledFooter, StyledTime, PhoneIcon, StyledConfirmText, StyledConfirmSub, StyledWrapper, StyledButton } from "./styled";
import { Icon } from "../UI/Icon/Icon";
import styled, { css } from "styled-components";
import { FooterPhoneIcon } from "../UI/FooterPhoneIcon/FooterPhoneIcon";

export type TFooter = {
  appDate?: string,
  appTime?: string,
  icon?: string,
  clicked?: string,
  test: boolean,
  test2?: boolean,
  handleСlick?: (val: boolean) => void,
}



export const AppConfirm: React.FC<TFooter> = ({ appDate, handleСlick, test2, appTime, icon }) => {
  const [clicked, setClicked] = useState('Confirm');
  const [test, setTest] = useState(test2 || false);

  return (
    <StyledFooter>
      <StyledButton test={test} onClick={() => {
        setClicked('Confirmed');
        if (test === false) {
          setTest(!test)
          handleСlick?.(!test)
        }
      }
      }>{clicked}</StyledButton>
    </StyledFooter>
  );
}

