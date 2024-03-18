import styled from 'styled-components';
import { colors } from 'utils/theme';

import { VscGithub } from 'react-icons/vsc';
import { VscGithubInverted } from 'react-icons/vsc';

export const GitIcon = styled(VscGithub)`
  width: 20px;
  height: 20px;
  color: ${colors.mainDarkColor};
  transition: color 250ms linear;

  &:hover {
    color: ${colors.accentColor};
  }
`;

export const GitIconTwo = styled(VscGithubInverted)`
  width: 20px;
  height: 20px;
  color: ${colors.mainDarkColor};
  transition: color 250ms linear;

  &:hover {
    color: ${colors.accentColor};
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  font-size: 14px;

  @media (max-width: 1024px) {
    padding: 8px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.backgroundColor};
  color: ${colors.mainDarkColor};
  border-radius: 50%;
  border: 1px solid transparent;
  width: 44px;
  height: 44px;
  transition: color 250ms linear;
  text-decoration: none;

  &:hover {
    color: ${colors.accentColor};
    background: ${colors.mainLightColor};
    border: 1px solid ${colors.textColorDarkBg};
  }

  &:first-child {
    margin-right: 30px;
  }
`;

export const DevLink = styled.a`
  text-decoration: none;
  padding: 10px;

  @media (max-width: 480px) {
    display: inline-block;
    padding: 5px;
    margin-top: 5px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    display: block;
    text-align: center;
  }
`;
