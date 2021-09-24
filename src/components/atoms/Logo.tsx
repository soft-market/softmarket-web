import { FunctionComponent } from 'react';
import logoUrl from '../../assets/images/softmarket_logo.png';

interface LogoProps {
  width: number;
  height: number;
}

const Logo: FunctionComponent<LogoProps> = ({ width, height }) => {
  return <img src={logoUrl} width={width} height={height} />;
};

export default Logo;
