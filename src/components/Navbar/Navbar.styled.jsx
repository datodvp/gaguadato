import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  /* position: relative; */
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  margin-left: 100px;
  display: flex;
`;

export const Category = styled.div`
  text-transform: uppercase;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 28px;
  padding-bottom: 32px;
  font-weight: 600;
  border-bottom: ${(props) =>
    props.id === props.currentCategoryIndex && '2px solid #5ece7b;'};
  color: ${(props) => props.id === props.currentCategoryIndex && '#5ece7b'};
  cursor: pointer;
`;

export const Center = styled.div`
  position: absolute;
  left: 50%;
`;

export const LogoImg = styled.img``;

export const Right = styled.div`
  margin-right: 100px;
  display: flex;
`;

export const CurrencyContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;
export const CurrencySymbol = styled.div`
  font-size: 18px;
  line-height: 28.8px;
  margin-right: 10px;
`;
export const Arrow = styled.img`
  width: 6px;
  height: 3px;
  margin-top: 4px;
`;
export const MiniCartLogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 22px;
  cursor: pointer;
`;
export const MiniCartLogo = styled.img``;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const CartCircle = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: black;
  /* position: absolute; */
  margin-left: -10px;
  margin-top: -10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 5px;
  z-index: 0;
`;
