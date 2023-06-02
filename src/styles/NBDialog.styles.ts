import styled from 'styled-components';

export const StyledDialog = styled.dialog`
  margin: auto;
  padding: 20px;
  font-family: sans-serif;
  border: 2px solid #000;
  background-color: #fff;
  box-shadow: 4px 4px 0 #000;

  ::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
