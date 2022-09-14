import { TFlexProps } from './Flex';
import styled from "styled-components";

export const StyledFlex = styled.div<TFlexProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  min-height: ${props => props.mHeight || 'auto'};
  gap: ${props => props.gap || 'normal'};
  margin: ${props => props.margin || '0'};
  width: ${props => props.width || 'auto'};;
`