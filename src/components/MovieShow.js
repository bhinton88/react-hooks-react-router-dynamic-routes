import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
  // call useParams to access the `params` from the url
  const params = useParams();
  console.log(params);

  // useParams sets params equal to an object with a key/value pair of 
  // movieID: whatever the ID is of the movie we clicked on 

  return (
    <div>
      {/* And here we access the `movieId` stored in `params` to render 
        information about the selected movie */}
      <h3>{movies[params.movieId].title}</h3>
    </div>
  );
}

export default MovieShow;