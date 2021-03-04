const Job = ({
  id,
  company,
  logo,
  isNew,
  isFeatured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  handleFilter,
}) => {
  return (
    <article
      className={`${isFeatured ? "job featured" : "job"}`}
      aria-label={company}
    >
      <img src={logo} alt={company} />
      <div className="job-info">
        <div className="title">
          <span className="name">{company}</span>
          {isNew && <span className="tag tag-new">new!</span>}
          {isFeatured && <span className="tag tag-featured">featured</span>}
        </div>
        <a href="/">
          <h4>{position}</h4>
        </a>
        <ul>
          <li>{postedAt}</li>
          <li>{contract}</li>
          <li>{location}</li>
        </ul>
      </div>
      <div className="tags">
        <button className="btn" onClick={handleFilter}>
          {role}
        </button>
        <button className="btn" onClick={handleFilter}>
          {level}
        </button>
        {languages.map((language, id) => {
          return (
            <button key={id} className="btn" onClick={handleFilter}>
              {language}
            </button>
          );
        })}
        {tools.map((tool, id) => {
          return (
            <button key={id} className="btn" onClick={handleFilter}>
              {tool}
            </button>
          );
        })}
      </div>
    </article>
  );
};

export default Job;
