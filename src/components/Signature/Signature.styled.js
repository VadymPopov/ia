import styled from 'styled-components';
import { colors } from '../../utils/theme';

export const SignaturePlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${colors.textColorDarkBg};
`;

export const SignatureContainer = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

export const ClearBtn = styled.button`
  padding: 6px 10px;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.33;
  text-transform: uppercase;
  border: 1px solid ${colors.accentColor};
  border-radius: 25px;
  background: transparent;
  transition: background-color 250ms linear;
  cursor: pointer;
  color: ${colors.mainLightColor};
  background-color: ${colors.accentColor};

  &:hover,
  &:focus {
    border: 1px solid ${colors.textColorDarkBg};
    background-color: ${colors.backgroundColor};
    color: ${colors.accentColor};
    border-radius: 25px;
  }

  &:disabled {
    background: #dddddd;
    box-shadow: none;
    cursor: not-allowed;
  }
`;
