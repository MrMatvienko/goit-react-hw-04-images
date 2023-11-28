import styled from 'styled-components';

export const Item = styled.li`
  overflow: hidden;
  display: inline-block;
  & img {
    transition: transform 0.3s ease-in-out;
  }
  &:hover img {
    transform: scale(1.1);
  }
`;
