export const MainMenuItem = ({ region, setRegion }) => {
  return (
    <li className="mine-menu__item">
      <button
        className="mine-menu__item-link"
        onClick={() => setRegion(region)}>
        {region}
      </button>
    </li>
  );
};
