import { Logo } from '../components/Logo';
import { MainMenu } from '../components/MainMenu/MainMenu';

export const Header = () => {
  return (
    <header className="header">
      <Logo />
      <MainMenu />
    </header>
  );
}
