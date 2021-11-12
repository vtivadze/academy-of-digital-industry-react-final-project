import logo from '../../images/logo.png';

export const Logo = () => {
  return (
    <div className="logo">
        <div className="logo__container">
          <img src={logo} alt="Globe" width="70" />
        </div>
      </div>
  );
}