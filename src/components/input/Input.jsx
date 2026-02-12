import S from "./input.module.scss";

const Input = ({ label, type, name, placeholder }) => {
  return (
    <div className={S.input}>
      <label htmlFor={name} className={S.label}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required
      />
      {/* {error && <p className={S.error}>{error}</p>} */}
    </div>
  );
};

export default Input;
