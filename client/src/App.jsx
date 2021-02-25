import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import BackToTopBar from './components/BackToTopBar.jsx';
import TopSection from './components/TopSection.jsx';
import LogoBar from './components/LogoBar.jsx';
import BottomSection from './components/BottomSection.jsx';

const FooterWrapper = styled.div`
  width: 100%;
`;

const App = (props) => (
  <FooterWrapper>
    <BackToTopBar />
    <TopSection />
    <LogoBar />
    <BottomSection />
  </FooterWrapper>
)

ReactDOM.render(<App />, document.getElementById('footer'));