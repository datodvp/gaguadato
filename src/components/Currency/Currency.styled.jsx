import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CurrencyWrapper = styled.div`
  position: absolute;
  height: fit-content;
  margin-top: 40px;
  margin-right: -20px;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
`;

export const SingleCurrency = styled.div`
  width: 100px;
  height: 45px;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: rgba(238, 238, 238, 1);
  }
`;
