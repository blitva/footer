import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import Chance from 'chance';
const chance = new Chance();

const BottomSectionWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #131A22;
`;

const ColumnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10% 0 10%;
  padding: 3% 0 3% 0;
`;

const BottomSectionCol = styled.div`
  width: 10%;
`;

const TextWrapper = styled.div`
  &:hover {
    cursor: pointer;
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
  ${TextWrapper}:hover & {
    text-decoration: underline;
  }
`;

const RegText = styled(Text)`
  color: #999;
  font-size: 10px;
  width: 88%;
  margin-bottom: 3em;
  ${TextWrapper}:hover & {
    text-decoration: underline;
  }
`;


const InfoItem = (props) => (
  <TextWrapper>
    <HeaderText>
      { chance.sentence({ words: Math.floor(Math.random() * (3 - 1) + 1) }).slice(0, -1) }
    </HeaderText>
    <RegText>
      { chance.sentence({ words: Math.floor(Math.random() * (5 - 3) + 3) }).slice(0, -1) }
    </RegText>
  </TextWrapper>
);

const generateItemsForCol = (numOfItems) => {

  let result = [];

  for (let i = 0; i < numOfItems; i++) {
    result.push(<InfoItem key={uuidv4()} />);
  };

  return result;
};

const generatedItemsForCol = generateItemsForCol(6);

const ItemsCol = (props) => (
  <BottomSectionCol>
    {generatedItemsForCol}
  </BottomSectionCol>
);

const generateColumns = (numOfCols) => {

  let result = [];

  for (let i = 0; i < numOfCols; i++) {
    result.push(<ItemsCol key={uuidv4()} />);
  };

  return result;
};

const numberOfItemsPerColumn = 6;
const generatedColumns = generateColumns(numberOfItemsPerColumn);

const EndOfPage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 3em;
`;

const EndOfPageText = styled.div`
  font-family: "Amazon Ember",Arial,sans-serif;
  font-size: 12px;
  color: #999999;
`;

const BottomSection = (props) => (
  <BottomSectionWrapper>
    <ColumnWrapper>
      {generatedColumns}
    </ColumnWrapper>
    <EndOfPage>
      <EndOfPageText>
        FEC-Blitva Amazon's mock-up created by Barsha Shrestha, Amos Nash, Justin Rozal and Alek Ortiz
      </EndOfPageText>
    </EndOfPage>
  </BottomSectionWrapper>
);

export default BottomSection;