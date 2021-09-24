import styled from '@emotion/styled';
import { FunctionComponent } from 'react';
import { Item } from '../../types/item';

const Wrapper = styled.li`
  display: flex;
  position: relative;
  flex-direction: column;
  width: max-content;
  height: 17.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  transition: 0.3s;
  margin: auto 0.5rem;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  &:nth-child(1) {
    grid-column: 1/2;
  }

  &:nth-child(2) {
    grid-column: 2/3;
  }

  &:nth-child(3) {
    grid-column: 3/4;
  }

  &:nth-child(4) {
    grid-column: 4/5;
  }
`;

interface CardProps {
  item: Item;
}

const Card: FunctionComponent<CardProps> = ({ item }) => {
  return (
    <Wrapper>
      <img src={item.image} width={200} height={200} />
      <h5>{item.title}</h5>
      <span>{item.created.toLocaleString()}</span>
    </Wrapper>
  );
};

// const Regular_Fill_Card = () => {};

export default Card;
