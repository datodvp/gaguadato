import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CategoryName = styled.div`
  height: 68px;
  font-size: 42px;
  font-weight: 400;
  margin-top: 80px;
  margin-left: 100px;
  margin-bottom: 103px;
  text-transform: capitalize;
  align-self: flex-start;
`;

export const ProductsWrapper = styled.div`
  align-self: center;
  display: grid;
  grid-template-columns: repeat(3, 386px);
  column-gap: 40px;
  row-gap: 100px;
  margin-bottom: 80px;
`;

export const AddToBasketIcon = styled.img`
  display: none;
  position: absolute;
  right: 31px;
  top: 320px;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ProductContainer = styled.div`
  position: relative;
  height: 444px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
  &:hover ${AddToBasketIcon} {
    display: inline;
  }
`;

export const ImageContainer = styled.div`
  width: 354px;
  height: 330px;
  margin: 16px 16px 16px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const AttributesContainer = styled.div`
  font-size: 18px;
  margin-left: 16px;
  margin-top: 24px;
`;

export const Brand = styled.div`
  font-size: 18px;
`;

export const Name = styled.div`
  font-size: 18px;
  font-weight: 300;
`;

export const Price = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
