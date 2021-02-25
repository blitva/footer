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

const generatedColumns = generateColumns(6);




const BottomSection = (props) => (
  <BottomSectionWrapper>
    <ColumnWrapper>
      {generatedColumns}
    </ColumnWrapper>
  </BottomSectionWrapper>
);

export default BottomSection;