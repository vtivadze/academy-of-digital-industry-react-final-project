import { Logo } from '../components/Logo';
import { MainMenu } from '../components/MainMenu/MainMenu';

export const Header = ({setCountries, setError}) => {
  
  return (
    <header className="header">
      <Logo />
      <MainMenu setCountries={setCountries} setError={setError} />
    </header>
  );
}
