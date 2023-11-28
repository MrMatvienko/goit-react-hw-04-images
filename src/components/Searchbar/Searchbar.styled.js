import styled from 'styled-components';
export const FormSearch = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  margin: auto;
  background-color: blueviolet;
`;

export const Input = styled.input`
  width: 400px;
  height: 25px;
  margin-bottom: 10px;
`;
export const Button = styled.button`
  background-color: #334533;
  color: white;
  height: 25px;
  &:hover,
  :focus {
    background-color: bisque;
    color: black;
  }
`;
