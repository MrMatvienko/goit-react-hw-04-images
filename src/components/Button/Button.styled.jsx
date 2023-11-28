import styled from 'styled-components';

export const Button = styled.button`
  margin: auto;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 30px;
  width: 200px;
  height: 25px;
  background-color: #270745;
  color: white;
  &:hover,
  :focus {
    background-color: #d04715;
    color: #e6e7ecec;
  }
`;
