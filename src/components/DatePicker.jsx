const DatePicker = ({ value, onChange }) => {
  return (
    <input
      type="date"
      className="input"
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
    />
  );
};

export default DatePicker;