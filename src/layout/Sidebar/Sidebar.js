import { FilterForm } from '../../components/FilterForm/FilterForm';
import style from './Sidebar.module.css';

export const Sidebar = ({ setCountries }) => {
  return (
    <aside className={`${style.sidebar}`}>
      <FilterForm
        setCountries={setCountries}
      />
    </aside>
  );
};
