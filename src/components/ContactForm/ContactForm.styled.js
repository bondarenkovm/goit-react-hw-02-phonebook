import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 500;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  font-size: 20px;
`;

export const Button = styled.button`
  width: 150px;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
  border: none;
  color: #fff;
  cursor: pointer;
  background-color: green;
  transition: 300ms;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    scale: 1.05;
  }
  &:active {
    scale: 0.95;
  }
`;
