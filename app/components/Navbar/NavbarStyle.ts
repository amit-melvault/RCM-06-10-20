import styled from 'styled-components';

export const NavbarStyle = styled.nav`
  display: flex;
  border: 1px solid black;
  list-style: none;
`;
export  const ButtonStyle = styled.button`
     border: none;
     background-color: #f7f5f9;
     &:hover{
       border-bottom: 2px solid blue;
       background-color: yellow;
     }
     &:active{
       background-color: blue;
     }
`;

export const Span = styled.span`
  width: 119px;
  height: 35px;
  border-radius: 5px;
  float: right;
  margin-top: -45px;
  margin-right: 163px;
  background-color: #415e78;
`;
export const P = styled.p`
  float: right;
    margin-top: -44px;
    margin-right: 100px;
`;

