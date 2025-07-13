const SearchInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="w-full p-3 sm:p-3 md:p-4 rounded-md border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-all duration-200"
      placeholder="Search book here..."
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchInput;
