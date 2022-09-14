import React from "react";
import styled from "styled-components";
import { THeader } from "../../utils/fetchers/types";
import { AppWrapper } from "../UI/AppWrapper/AppWrapper";
import { ClincName } from "../UI/ClinicName/ClinicName";
import { Flex } from "../UI/Flex/Flex";

type TProps = {
  header: THeader,
}

const StyledHeader = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid #EBEBEB;
`

export const Header: React.FC<TProps> = ({header}) => {
  const {imageLink, clinicName } = header;
  return (
    <StyledHeader>
      <AppWrapper>
        <Flex justify="space-between" align="center" mHeight="4rem">
          <ClincName>{clinicName}</ClincName>
          <img src={imageLink} alt="logo" />
        </Flex>
      </AppWrapper>
    </StyledHeader>
  );
}

