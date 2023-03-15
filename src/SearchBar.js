function Search({ onChange }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Sök efter produkter"
        onChange={onChange}
      />
    </div>
  );
}

export default Search;
