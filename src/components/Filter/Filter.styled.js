import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
  min-width: 328px;

  background: #ffffff;

  border-radius: 8px;
  & h2 {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.01em;

    color: #1f3349;
    margin-bottom: 15px;
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  & p {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #7f8e9d;
    margin-bottom: 8px;
  }
`;
export const Input = styled.input`
  background: #f4f4f3;
  border: 1px solid #c5c5c5;
  border-radius: 6px;
  padding: 10px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  letter-spacing: 0.16px;

  outline: none;

  &:hover,
  &:focus {
    border: 1px solid #4cc6f5;
  }

  &::placeholder {
    color: #a8a8a8;
  }
`;
