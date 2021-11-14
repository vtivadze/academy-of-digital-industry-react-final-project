import { FilterForm } from '../components/FilterForm/FilterForm';

export const Sidebar = ({ setCountries }) => {
  return (
    <aside className="sidebar">
      <FilterForm
        setCountries={setCountries}
      />
    </aside>
  );
};
