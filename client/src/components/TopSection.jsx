import React from 'react';
import styled from 'styled-components';

const TopSectionWrapper = styled.div`
  width: 100%;
  background-color: #232F3E;
`;

const ColumnWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 10% 0 10%;
  padding: 3% 0 3% 0;
`;

const TopSectionOuterCol = styled.div`
  width: 15%;
  height: auto;
`;

const TopSectionInnerCol = styled.div`
  width: 23%;
  height: auto;
`;

const Text = styled.p`
  font-family: "Amazon Ember",Arial,sans-serif;
  color: #FFFFFF;
`;

const HeaderText = styled(Text)`
  width: auto;
  font-weight: 700;
  font-size: 16px;
`;

const RegText = styled(Text)`
  font-size: 14px;
  width: 88%;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const TopSection = (props) => (
  <TopSectionWrapper>
    <ColumnWrapper>
      <TopSectionOuterCol>
        <HeaderText>Get to Know Us</HeaderText>
          <RegText>Careers</RegText>
          <RegText>Blog</RegText>
          <RegText>About Amazon</RegText>
          <RegText>Sustainability</RegText>
          <RegText>Press Center</RegText>
          <RegText>Investor Relations</RegText>
          <RegText>Amazon Devices</RegText>
          <RegText>Amazon Tours</RegText>
      </TopSectionOuterCol>

      <TopSectionInnerCol>
        <HeaderText>Make Money with Us</HeaderText>
          <RegText>Sell products on Amazon</RegText>
          <RegText>Sell apps on Amazon</RegText>
          <RegText>Become an Affiliate</RegText>
          <RegText>Advertise Your Products</RegText>
          <RegText>Self-Publish with Us</RegText>
          <RegText>Host an Amazon Hub</RegText>
          <RegText>› See More Make Money with us</RegText>
      </TopSectionInnerCol>

      <TopSectionInnerCol>
        <HeaderText>Amazon Payment Products</HeaderText>
          <RegText>Amazon Rewards Visa Signature Cards</RegText>
          <RegText>Amazon.com Store Card</RegText>
          <RegText>Amazon Business Card</RegText>
          <RegText>Amazon Business Line of Credit</RegText>
          <RegText>Credit Card Marketplace</RegText>
          <RegText>Reload Your Balance</RegText>
          <RegText>Amazon Currency Converter</RegText>
      </TopSectionInnerCol>

      <TopSectionOuterCol>
        <HeaderText>Let Us Help You</HeaderText>
          <RegText>Amazon and COVID-19</RegText>
          <RegText>Your Account</RegText>
          <RegText>Your Orders</RegText>
          <RegText>Shipping Rates & Policies</RegText>
          <RegText>Amazon Prime</RegText>
          <RegText>Returns & Replacements</RegText>
          <RegText>Manage Your Content and Devices</RegText>
          <RegText>Amazon Assistant</RegText>
          <RegText>Help</RegText>
      </TopSectionOuterCol>
    </ColumnWrapper>
    </TopSectionWrapper>
);

export default TopSection;
