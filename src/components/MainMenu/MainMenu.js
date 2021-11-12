import { MainMenuItem } from "../MainMenuItem";

export const MainMenu = () => {
  return (
    <nav className="main-menu">
        <ul className="mine-menu__container">
          <MainMenuItem href="#" text="Africa" />
          <MainMenuItem href="#" text="Americas" />
          <MainMenuItem href="#" text="Asia" />
          <MainMenuItem href="#" text="Europe" />
          <MainMenuItem href="#" text="Oceania" />
        </ul>
      </nav>
  );
}