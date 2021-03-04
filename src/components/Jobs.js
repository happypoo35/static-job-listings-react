import Job from "./Job";

const Jobs = ({ handleFilter, jobsList, filters }) => {
  return (
    <section className="jobs pad" aria-label="jobs">
      <div className="container">
        {jobsList.map((job) => {
          return <Job key={job.id} {...job} handleFilter={handleFilter} />;
        })}
      </div>
    </section>
  );
};

export default Jobs;
