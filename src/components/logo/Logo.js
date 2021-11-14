import logo from '../../images/logo.png';
import style from './Logo.module.css';

export const Logo = () => {
  return (
    <div className={`${style.logo}`}>
        <div className={`${style.logo__container}`}>
          <img src={logo} alt="Globe" width="60" />
        </div>
      </div>
  );
}