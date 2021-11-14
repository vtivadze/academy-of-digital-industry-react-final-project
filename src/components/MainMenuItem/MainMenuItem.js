import style from './MainMenuItem.module.css';

export const MainMenuItem = ({ region, setRegion }) => {
  return (
    <li className={`${style.mainMenu__item}`}>
      <button
        className={`${style.mainMenu__itemLink}`}
        onClick={() => setRegion(region)}>
        {region}
      </button>
    </li>
  );
};
