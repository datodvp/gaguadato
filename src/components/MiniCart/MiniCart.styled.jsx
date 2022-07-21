import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  /* overflow: hidden; */
`;
export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 80px;
  height: calc(100% - 80px);
  background: rgba(57, 55, 72, 0.22);
`;

export const MiniCartWrapper = styled.div`
  position: absolute;
  height: fit-content;
  width: fit-content;
  background-color: white;
  margin-right: -30px;
  margin-top: 54px;
`;

export const ItemsContainer = styled.div`
  margin: 32px 16px;
`;

export const HeaderContainer = styled.div`
  display: flex;

  margin-bottom: 32px;
`;

export const Name = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const ItemsAmount = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  max-height: 400px;
  overflow-y: auto;
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: center;
  justify-content: center;
`;

export const ItemNameContainer = styled.div`
  margin-bottom: 4px;
  width: 160px;
`;

export const ItemBrand = styled.div`
  font-size: 16px;
  font-weight: 300;
`;

export const ItemName = styled.div`
  font-size: 16px;
  font-weight: 300;
`;

export const ItemPrice = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const AttributesContainer = styled.div``;

export const AttributeName = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 8px;
`;

export const AttributeBoxesContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

export const AttributeTextBox = styled.div`
  border: 1px solid rgba(29, 31, 34, 1);
  width: fit-content;
  padding-left: 5px;
  padding-right: 5px;
  height: 24px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  background-color: ${(props) => {
    if (
      props.currentAttributes &&
      props.currentAttributes.itemId === props.id
    ) {
      return 'black';
    }
  }};
  color: ${(props) => {
    if (
      props.currentAttributes &&
      props.currentAttributes.itemId === props.id
    ) {
      return 'white';
    }
  }};
  cursor: default;
`;

export const AttributeColorBox = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.value};
  margin-right: 4px;
  position: relative;
  margin-left: 4px;
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
      if (
        props.currentAttributes &&
        props.currentAttributes.itemId === props.id
      ) {
        return 'rgba(94, 206, 123, 1) 1px solid';
      }
    }};
  }
`;

export const ChangeAmountContainer = styled.div`
  width: 30px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 8px;
  margin-left: 20px;
`;

export const PlusButton = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid #1d1f22;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  cursor: pointer;
`;

export const MinusButton = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid #1d1f22;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  line-height: 15px;
  cursor: pointer;
`;

export const AmountNumber = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const ImageContainer = styled.div`
  width: 121px;
  height: 190px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const TotalText = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const TotalPrice = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const VievBagButton = styled.div`
  /* _Button / Elements / Common */

  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 140px;
  height: 43px;

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  background: #ffffff;
  border: 1px solid #1d1f22;
`;

export const CheckOutButton = styled.div`
  /* _Button / Elements / Common */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 140px;
  height: 43px;
  right: 0;

  color: white;
  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  /* --c-primary */

  background: #5ece7b;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

