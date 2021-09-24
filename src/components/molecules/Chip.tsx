import styled from '@emotion/styled';
import { FunctionComponent } from 'react';
import { Item } from '../../types/item';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: max-content;
  height: 30rem;
`;

interface ChipProps {
  item: Item;
}

const Chip: FunctionComponent<ChipProps> = ({ item }) => {
  return (
    <Wrapper>
      <title>{item.title}</title>
      <img>{item.image}</img>
      <span>{item.created}</span>
    </Wrapper>
  );
};

const Regular_Fill_Chip = () => {};

export default Chip;
