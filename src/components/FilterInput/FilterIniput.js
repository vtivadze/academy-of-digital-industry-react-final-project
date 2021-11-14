export const FilterInput = ({label, inputName, value, onChange}) => {
  return (
    <label>
        {`${label}:`}
        <input
          type="text"
          name={inputName}
          value={value}
          onChange={onChange}
        />
      </label>
  );
};