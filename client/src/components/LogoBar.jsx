import React from 'react';
import styled from 'styled-components';

const LogoBarEl = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4em;
  border-top: 1px solid #3a4553;
  background-color: #232F3E;
`;

const Logo = styled.div`
    background-image: url("https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405937547_.png");
    background-position: -10px -90px;
    width: 76px;
    height: 23px;
    margin: 0;
`;

const LogoBar = (props) => (
  <a href='#navbar'>
    <LogoBarEl>
      <Logo></Logo>
    </LogoBarEl>
  </a>
);

export default LogoBar;