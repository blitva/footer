import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Footer = styled.div`
  display: flex;
  margin-right: -9.3em;
`;

const App = (props) => (
  <Footer>Hello World</Footer>
)

ReactDOM.render(<App />, document.getElementById('footer'));