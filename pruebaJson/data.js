export const filterLimit = (locations, service) => {
  let higherLimit = locations.filter(
    (location) => (location.service = service)
  );
  return higherLimit;
};

// export const filtroDirector = (movies, selection) => {
//     let peliDirector = movies.filter((movie) => movie.director === selection);
//     return peliDirector;
//   };
