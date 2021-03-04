const FilterItem = ({ filters, setFilters, filter }) => {
  const handleRemove = () => {
    setFilters(filters.filter((item) => item !== filter));
  };

  return (
    <div className="filter-item">
      <span>{filter}</span>
      <button
        className="remove"
        aria-label="remove filter"
        onClick={handleRemove}
      >
        <img src="./images/icon-remove.svg" alt="remove" />
      </button>
    </div>
  );
};

export default FilterItem;
