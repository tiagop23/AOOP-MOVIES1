import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, CircularProgress, Chip, Box } from '@mui/material';

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/movies/${id}`)
            .then(res => res.json())
            .then(data => setMovie(data));
    }, [id]);

    if (!movie) return <CircularProgress sx={{ m: 4 }} />;

    return (
        <Container sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom>{movie.title}</Typography>
            {movie.poster && <img src={movie.poster} alt={movie.title} width="300" />}
            <Typography variant="body1" sx={{ mt: 2 }}>{movie.plot}</Typography>
            <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {movie.genres?.map((g, i) => <Chip key={i} label={g} />)}
            </Box>
        </Container>
    );
};

export default MovieDetail;
