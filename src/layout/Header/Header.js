import { MainMenu } from '../../components/MainMenu/MainMenu';
import style from './Header.module.css';

export const Header = ({setCountries, setError}) => {
  
  return (
    <header className={`${style.header}`}>
      <MainMenu setCountries={setCountries} setError={setError} />
    </header>
  );
}
