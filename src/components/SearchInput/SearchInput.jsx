const SearchInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className=" border-primary border-2 p-2 mb-4 w-full"
      placeholder="Search book here..."
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchInput;
