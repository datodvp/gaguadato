import styled from 'styled-components';

export const Container = styled.div`
  /* width: 100%; */
  /* background-color: lightgreen; */
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 80px;
`;

export const PageName = styled.div`
  margin-bottom: 55px;
  font-weight: 700;
  font-size: 32px;
  text-transform: uppercase;
`;

export const DesignLine = styled.div`
  width: 1240px;
  height: 1px;
  left: 100px;
  top: 255px;
  margin-top: 24px;
  margin-bottom: 24px;
  background: #e5e5e5;
`;

export const ProductsWrapper = styled.div`
  height: fit-content;
  padding-bottom: 16px;
  /* background-color: lightgreen; */
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div``;

export const ProductBrand = styled.div`
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 20px;
`;

export const ProductName = styled.div`
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 20px;
`;

export const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const AttributeContainer = styled.div``;

export const AttributeName = styled.div`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 7px;
`;

export const AttributeBoxesContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const AttributeTextBox = styled.div`
  border: 1px solid rgba(29, 31, 34, 1);
  width: 63px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  background-color: ${(props) => props.currentAttributes && 'black'};
  color: ${(props) => props.currentAttributes && 'white'};
  cursor: pointer;
`;

export const AttributeColorBox = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.color};
  margin-right: 8px;
  position: relative;
  cursor: pointer;
`;

export const AttributeColorBoxAfter = styled.div`
  &:after {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border: ${(props) =>
      props.currentAttributes && 'rgba(94, 206, 123, 1) 2px solid'};
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AmountChangerContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 288px;
`;

export const PlusButton = styled.div`
  width: 45px;
  height: 45px;
  font-size: 60px;
  font-weight: 100;
  line-height: 45px;
  text-align: center;
  border: 1px solid rgba(29, 31, 34, 1);
  overflow: hidden;
  cursor: pointer;
`;

export const MinusButton = styled.div`
  width: 45px;
  height: 45px;
  font-size: 60px;
  font-weight: 100;
  line-height: 36px;
  text-align: center;
  border: 1px solid rgba(29, 31, 34, 1);
  overflow: hidden;
  cursor: pointer;
`;

export const AmountNumber = styled.div`
  font-size: 24px;
  font-weight: 500px;
  text-align: center;
`;

export const PhotoContainer = styled.div`
  width: 200px;
  height: 288px;
  margin: auto;
  margin-left: 24px;
  position: relative;
  display: flex;
  align-items: center;
`;

export const Photo = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const SwappersContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  right: 0;
  bottom: 16px;
`;
export const LeftSwapIcon = styled.img`
  margin-right: 8px;
  cursor: pointer;
`;
export const RightSwapIcon = styled.img`
  margin-right: 16px;
  cursor: pointer;
`;

export const SumContainer = styled.div`
  margin-bottom: 100px;
`;

export const InfoBox = styled.div`
  font-size: 24px;
  font-weight: 400;
  span {
    font-weight: 700;
  }
`;

export const BuyButtom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;

  width: 279px;
  height: 43px;
  color: white;
  margin-top: 20px;

  /* --c-primary */
  cursor: pointer;
  background: #5ece7b;
`;
