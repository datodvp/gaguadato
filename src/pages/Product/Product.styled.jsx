import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 80px;
  display: flex;
`;

export const ImagesContainer = styled.div`
  display: flex;
`;

export const MiniImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 511px;
`;

export const MiniImgContainer = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export const MiniImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const MainImgContainer = styled.div`
  width: 610px;
  height: 511px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
  margin-right: 102px;
  position: relative;
`;

export const MainImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const AttributesContainer = styled.div`
  width: 292px;
  height: fit-content;
`;

export const ProductBrand = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const ProductName = styled.div`
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 43px;
`;

export const AttributeName = styled.div`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

export const AttributeBoxesContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

export const AttributeTextBox = styled.div`
  border: 1px solid rgba(29, 31, 34, 1);
  width: 63px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  background-color: ${(props) => {
    if (props.currentAttributes) {
      if (props.currentAttributes.itemId === props.itemId) {
        return 'black';
      }
    } else {
      return '';
    }
  }};
  color: ${(props) => {
    if (props.currentAttributes) {
      if (props.currentAttributes.itemId === props.itemId) {
        return 'white';
      }
    } else {
      return '';
    }
  }};
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
    border: ${(props) => {
      if (props.currentAttributes) {
        if (props.currentAttributes.itemId === props.id) {
          return 'rgba(94, 206, 123, 1) 2px solid';
        }
      } else {
        return '';
      }
    }};
  }
`;

export const Price = styled.div`
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 10px;
  height: 700;
  font-weight: 700;
`;

export const PriceValue = styled.div`
  height: 46px;
  font-size: 24px;
  font-weight: 700;
`;

export const AddToCartButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 32px;

  width: 292px;
  height: 52px;
  left: 929px;
  top: 560px;
  color: white;
  cursor: pointer;

  background: #5ece7b;
  margin-top: 20px;
`;

export const Description = styled.div`
  margin-top: 40px;
  font-weight: 400;
  font-size: 16px;
`;

export const OutOfStock = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ffffff;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 400;
  color: rgba(141, 143, 154, 1);
`;
