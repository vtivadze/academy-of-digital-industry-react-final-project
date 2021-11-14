import { Logo } from '../../components/Logo';
import { MainMenu } from '../../components/MainMenu/MainMenu';
import style from './Header.module.css';

export const Header = ({setCountries, setError}) => {
  
  return (
    <header className={`${style.header}`}>
      <Logo />
      <MainMenu setCountries={setCountries} setError={setError} />
    </header>
  );
}
