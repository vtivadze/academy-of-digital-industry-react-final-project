import style from './FilterInput.module.css';

export const FilterInput = ({label, inputName, value, onChange}) => {
  return (
    <div className={`${style.filterInput}`}>
      <label htmlFor={inputName}>{`${label}:`}</label>
      <input
        type="text"
        id={inputName}
        name={inputName}
        value={value}
        onChange={onChange}
      />
    </div>
    
  );
};