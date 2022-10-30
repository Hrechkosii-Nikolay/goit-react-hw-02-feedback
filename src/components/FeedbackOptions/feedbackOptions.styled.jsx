import styled from '@emotion/styled';

export const ButtonStyle = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;

  font-weight: bold;
  width: 90px;
  background-color: #fff;
  text-transform: uppercase;

  &:hover {
    background-color: #2323959e;
    color: #fff;
  }
`;

export const ButtonsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 15px;
`;
