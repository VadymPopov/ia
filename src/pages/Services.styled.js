import styled from 'styled-components';

export const Item = styled.li`
   display: flex;
   margin-bottom: 30px;
   padding: 20px;
   
   &:nth-of-type(2n){
    background-color: #f7f7f7;
   }
`;

export const Image = styled.img`
   border-radius: 5px;
   max-width: 320px;
`;

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-right: 50px;
  background-color: black;
  color: white;
`;

export const Suptitle = styled.p`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.3636363636;
    text-transform: uppercase;
    color: gray;

    &::before {
    content: "";
    display: block;
    margin-right: 20px;
    width: 60px;
    height: 1px;
    background-color: gray;
    }
`;

export const Description = styled.div`
    font-size: 18px;
    font-weight: 400;
    letter-spacing: .02em;
    line-height: 1.3;
    color: white;
    margin-top: 16px;
    padding: 10px;
    text-align: start;
`;

export const Section = styled.section`
    padding: 20px 20px;
`;

export const CardTitle = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: gray;
    margin-bottom: 10px;
    text-align: center;
`;

export const CardFooter = styled.div`
   text-align: center;
`;


export const Text = styled.p`
    font-size: 18px;
    line-height: 1.67;
    letter-spacing: .02em;
    color: gray;
    text-align: justify;
    text-indent: 30px;
`;