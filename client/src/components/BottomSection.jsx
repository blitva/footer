import React from 'react';
import styled from 'styled-components';

const BottomSectionWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #131A22;
`;

const ColumnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 1% 0 1%;
  padding: 3% 0 3% 0;
`;

const BottomSectionCol = styled.div`
  width: 10%;
`;

const TextWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
  &:first-child {
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Text = styled.p`
  font-family: "Amazon Ember",Arial,sans-serif;
  padding 0;
  margin 0;
`;

const HeaderText = styled(Text)`
  color: #DDDDDD;
  width: auto;
  font-weight: 600;
  font-size: 11px;
`;

const RegText = styled(Text)`
  color: #999;
  font-size: 10px;
  width: 88%;
  margin-bottom: 3em;
`;



const BottomSection = (props) => (
  <BottomSectionWrapper>
    <ColumnWrapper>
      <BottomSectionCol>
        <TextWrapper>
          <HeaderText>Let Us Help You</HeaderText>
            <RegText>Amazon and COVID-19</RegText>
        </TextWrapper>

        <TextWrapper>
          <HeaderText>Let Us Help You</HeaderText>
            <RegText>Amazon and COVID-19</RegText>
        </TextWrapper>

        <TextWrapper>
          <HeaderText>Let Us Help You</HeaderText>
            <RegText>Amazon and COVID-19</RegText>
        </TextWrapper>

        <TextWrapper>
          <HeaderText>Let Us Help You</HeaderText>
            <RegText>Amazon and COVID-19</RegText>
        </TextWrapper>
      </BottomSectionCol>

      <BottomSectionCol>
        <TextWrapper>
          <HeaderText>Let Us Help You</HeaderText>
            <RegText>Amazon and COVID-19</RegText>
        </TextWrapper>

        <TextWrapper>
          <HeaderText>Let Us Help You</HeaderText>
            <RegText>Amazon and COVID-19</RegText>
        </TextWrapper>

        <TextWrapper>
          <HeaderText>Let Us Help You</HeaderText>
            <RegText>Amazon and COVID-19</RegText>
        </TextWrapper>

        <TextWrapper>
          <HeaderText>Let Us Help You</HeaderText>
            <RegText>Amazon and COVID-19</RegText>
        </TextWrapper>
      </BottomSectionCol>

      <BottomSectionCol>
        <TextWrapper>
          <HeaderText>Let Us Help You</HeaderText>
            <RegText>Amazon and COVID-19</RegText>
        </TextWrapper>

        <TextWrapper>
          <HeaderText>Let Us Help You</HeaderText>
            <RegText>Amazon and COVID-19</RegText>
        </TextWrapper>

        <TextWrapper>
          <HeaderText>Let Us Help You</HeaderText>
            <RegText>Amazon and COVID-19</RegText>
        </TextWrapper>

        <TextWrapper>
          <HeaderText>Let Us Help You</HeaderText>
            <RegText>Amazon and COVID-19</RegText>
        </TextWrapper>
      </BottomSectionCol>

      <BottomSectionCol>
        <TextWrapper>
          <HeaderText>Let Us Help You</HeaderText>
            <RegText>Amazon and COVID-19</RegText>
        </TextWrapper>

        <TextWrapper>
          <HeaderText>Let Us Help You</HeaderText>
            <RegText>Amazon and COVID-19</RegText>
        </TextWrapper>

        <TextWrapper>
          <HeaderText>Let Us Help You</HeaderText>
            <RegText>Amazon and COVID-19</RegText>
        </TextWrapper>

        <TextWrapper>
          <HeaderText>Let Us Help You</HeaderText>
            <RegText>Amazon and COVID-19</RegText>
        </TextWrapper>
      </BottomSectionCol>

      <BottomSectionCol>
        <TextWrapper>
          <HeaderText>Let Us Help You</HeaderText>
            <RegText>Amazon and COVID-19</RegText>
        </TextWrapper>

        <TextWrapper>
          <HeaderText>Let Us Help You</HeaderText>
            <RegText>Amazon and COVID-19</RegText>
        </TextWrapper>

        <TextWrapper>
          <HeaderText>Let Us Help You</HeaderText>
            <RegText>Amazon and COVID-19</RegText>
        </TextWrapper>

        <TextWrapper>
          <HeaderText>Let Us Help You</HeaderText>
            <RegText>Amazon and COVID-19</RegText>
        </TextWrapper>
      </BottomSectionCol>

      <BottomSectionCol>
        <TextWrapper>
          <HeaderText>Let Us Help You</HeaderText>
            <RegText>Amazon and COVID-19</RegText>
        </TextWrapper>

        <TextWrapper>
          <HeaderText>Let Us Help You</HeaderText>
            <RegText>Amazon and COVID-19</RegText>
        </TextWrapper>

        <TextWrapper>
          <HeaderText>Let Us Help You</HeaderText>
            <RegText>Amazon and COVID-19</RegText>
        </TextWrapper>

        <TextWrapper>
          <HeaderText>Let Us Help You</HeaderText>
            <RegText>Amazon and COVID-19</RegText>
        </TextWrapper>
      </BottomSectionCol>

      <BottomSectionCol>
        <TextWrapper>
          <HeaderText>Let Us Help You</HeaderText>
            <RegText>Amazon and COVID-19</RegText>
        </TextWrapper>

        <TextWrapper>
          <HeaderText>Let Us Help You</HeaderText>
            <RegText>Amazon and COVID-19</RegText>
        </TextWrapper>

        <TextWrapper>
          <HeaderText>Let Us Help You</HeaderText>
            <RegText>Amazon and COVID-19</RegText>
        </TextWrapper>

        <TextWrapper>
          <HeaderText>Let Us Help You</HeaderText>
            <RegText>Amazon and COVID-19</RegText>
        </TextWrapper>
      </BottomSectionCol>
    </ColumnWrapper>
  </BottomSectionWrapper>
);

export default BottomSection;