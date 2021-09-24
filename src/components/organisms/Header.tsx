import styled from '@emotion/styled';
import Logo from '../atoms/Logo';

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
`;

const Header = () => {
  return (
    <Wrapper>
      <Logo width={250} height={250} />
    </Wrapper>
  );
};

export default Header;
