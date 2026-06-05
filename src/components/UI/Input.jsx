function Input({ label, id, ...inputProps }) {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...inputProps} required />
    </p>
  );
}
export default Input;
