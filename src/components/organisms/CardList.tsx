import styled from '@emotion/styled';
import { FunctionComponent } from 'react';
import { Item } from '../../types/item';
import Card from '../molecules/Card';

interface CardListProps {
  itemList?: Item[];
}

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, minmax(50px, auto));
  grid-template-rows: repeat(auto-fill, auto);
  padding: 30px;
`;

const CardList: FunctionComponent<CardListProps> = ({ itemList }) => {
  return <Wrapper>{itemList && itemList.map((item) => <Card item={item} key={item.id} />)}</Wrapper>;
};

CardList.defaultProps = {
  itemList: [
    {
      id: 1,
      author: {
        nickname: 'Tester',
        email: 'test@test.com',
      },
      title: '테스트 타이틀',
      image: `https://source.unsplash.com/random/200x200?sig=${1}`,
      created: new Date(),
      modified: new Date(),
      content: '테스트 내용',
    },
    {
      id: 2,
      author: {
        nickname: 'Tester',
        email: 'test@test.com',
      },
      title: '테스트 타이틀2',
      image: `https://source.unsplash.com/random/300x200?sig=${2}`,
      created: new Date(),
      modified: new Date(),
      content: '테스트 내용2',
    },
    {
      id: 3,
      author: {
        nickname: 'Tester',
        email: 'test@test.com',
      },
      title: '테스트 타이틀3',
      image: `https://source.unsplash.com/random/300x200?sig=${3}`,
      created: new Date(),
      modified: new Date(),
      content: '테스트 내용3',
    },
    {
      id: 4,
      author: {
        nickname: 'Tester',
        email: 'test@test.com',
      },
      title: '테스트 타이틀4',
      image: `https://source.unsplash.com/random/300x200?sig=${4}`,
      created: new Date(),
      modified: new Date(),
      content: '테스트 내용4',
    },
    {
      id: 5,
      author: {
        nickname: 'Tester',
        email: 'test@test.com',
      },
      title: '테스트 타이틀5',
      image: `https://source.unsplash.com/random/300x200?sig=${5}`,
      created: new Date(),
      modified: new Date(),
      content: '테스트 내용5',
    },
  ],
};

export default CardList;
