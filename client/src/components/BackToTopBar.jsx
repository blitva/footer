import React from 'react';
import styled from 'styled-components';

const BackToTopWrapper = styled.div`
  width: 100%;
  height: 3.5em;
  text-align: center;
  line-height: 3.5em;
  font-family: "Amazon Ember",Arial,sans-serif;
  font-size: 13px;
  color: white;
  background-color: #37475A;
  &:hover {
    background-color: #485769;
  }
`;

const BackToTopBar = (props) => (
  <BackToTopWrapper>Back to top</BackToTopWrapper>
);

export default BackToTopBar;
