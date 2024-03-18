import styled from 'styled-components';
import { colors } from '../../utils/theme';
import { BsInstagram } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

export const Instagram = styled(BsInstagram)`
  margin-right: 5px;
`;

export const Mail = styled(HiOutlineMail)`
  margin-right: 5px;
`;

export const Item = styled.li`
  padding: 20px 15px;
  border: 1px solid ${colors.accentColor};
  border-radius: 15px;

  @media screen and (max-width: 599px) {
    margin-bottom: 20px;
  }
`;

export const Name = styled.p`
  margin: 10px 0;
  color: ${colors.cardColor};
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Info = styled.p`
  color: ${colors.textColor};
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Time = styled.p`
  margin-bottom: 10px;
  color: ${colors.cardColor};
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  font-size: 20px;
  border: none;
  border-radius: 5px;
  border: 1px solid ${colors.cardColor};
  color: ${colors.cardColor};
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: ${colors.accentColor};
    border-color: ${colors.accentColor};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 15px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
`;

export const Input = styled.input`
  color: ${colors.cardColor};
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
  max-width: 80px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
