export const MainMenuItem = ({href, text}) => {
  return (
    <li className="mine-menu__item">
      <a className="mine-menu__item-link" href={href}>{text}</a>
    </li>
  );
}