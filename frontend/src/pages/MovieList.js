import React, { useEffect, useState } from 'react';
import { Grid, Container, Typography } from '@mui/material';
import MovieCard from '../components/MovieCard';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/movies')
      .then(res => res.json())
      .then(data => setMovies(data.data || []));
  }, []);

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Typography variant="h4" gutterBottom>Movie List</Typography>
      <Grid container spacing={4}>
        {movies.map(movie => (
          <Grid item key={movie._id} xs={12} sm={6} md={4}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MovieList;
