import FilterItem from "./FilterItem";

const Filter = ({ filters, setFilters, showFilter, clearFilter }) => {
  return (
    <div className={`${showFilter ? "filter pad show" : "filter pad"}`}>
      <div className="container">
        <div className="filter-items-container">
          {filters.map((filter, id) => {
            return (
              <FilterItem
                key={id}
                filters={filters}
                setFilters={setFilters}
                filter={filter}
              />
            );
          })}
        </div>
        <button className="clear" onClick={clearFilter}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filter;
