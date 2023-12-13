/* eslint-disable react/prop-types */
const Card = ({
  poster_path,
  title,
  overview,
  first_aired,
  content_type,
  genres,
}) => {

  return (
    <div className="card_parent">
      <img src={poster_path} className="movie_banner" alt={title} />
      <div className="rating_parent">
        <div>{genres.join(" | ")}</div>
        <div>{content_type}</div>
      </div>
      <div className="movie_name">{title}</div>
      <div className="movie_msg">{overview}</div>
      <div className="date">{first_aired}</div>
    </div>
  );
};

export default Card;
