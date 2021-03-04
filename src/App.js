import { useEffect, useState } from "react";
import data from "./data";
import Filter from "./components/Filter";
import Jobs from "./components/Jobs";

const App = () => {
  const [jobsList, setJobsList] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState([]);

  const handleFilter = (e) => {
    setFilters([...new Set([...filters, e.target.innerText])]);
    setShowFilter(true);

    if (!filters.includes(e.target.innerText)) {
      window.scroll({ top: 0 });
    }
  };

  const clearFilter = () => {
    setFilters([]);
    setShowFilter(false);
  };

  const contains = (first, second) => {
    const indexArray = first.map((el) => {
      return second.indexOf(el);
    });
    return indexArray.indexOf(-1) === -1;
  };

  useEffect(() => {
    data.forEach((el) => {
      el.tags = [el.role, el.level, ...el.languages, ...el.tools];
    });

    let newData = [];

    if (filters.length === 0) {
      setShowFilter(false);
      setJobsList(data);
    } else {
      data.map((job) => {
        if (contains(filters, job.tags)) {
          newData = [...newData, job];
        }
        return newData;
      });

      setJobsList(newData);
    }
  }, [filters]);

  return (
    <>
      <header>
        <h1>Static Job Listing</h1>
      </header>
      <Filter
        filters={filters}
        setFilters={setFilters}
        showFilter={showFilter}
        clearFilter={clearFilter}
      />
      <Jobs handleFilter={handleFilter} jobsList={jobsList} filters={filters} />
    </>
  );
};

export default App;
