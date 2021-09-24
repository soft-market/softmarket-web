import { useRecoilState } from 'recoil';
import authAtom from '../types/auth';

const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authAtom);
};

export default useAuth;
