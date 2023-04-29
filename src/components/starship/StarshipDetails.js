import React, { useCallback, useState, useEffect } from 'react'
import to from "await-to-js";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Navigation from '../Navigation';
import { services } from "../../api/StarwarsAPI";
import { Grid } from '@material-ui/core';

export const StarshipDetails = () => {
    const [starshipId] = useState(window.location.pathname.split('/').pop());
    const [starship, setStarship] = useState(null);

    const getStarship = useCallback(async () => {
        try {
          const [err, { data: response }] = await to(services.getStarshipById(starshipId));
    
          setStarship(response);
        } catch (error) {
          console.log('Error: ', error);
          setStarship(null);
        }
    });

    useEffect(() => {
        getStarship();
      }, []);

    return (
        <div>
            <Navigation />

            <Grid container spacing={0} direction='row' alignItems='center' justify="center" style={{ minHeight: '100vh' }}>
                <Grid xs={6}>
                    <Card style={{minWidth: 700, textAlign: 'center'}}>
                        <CardContent>
                            <Typography variant="h3" component="h3">
                                {starship && starship.name}
                            </Typography>
                            <Typography variant="h3" component="h3">
                                <img src={require('../../images/ship_img.png')} alt="Star Wars Ship Logo"></img>
                            </Typography>
                            <Typography variant="h5" component="h5">
                                <strong>Model:</strong> {starship && starship.model}
                            </Typography>
                            <Typography variant="h5" component="h5">
                                <strong>Hyperdrive Rating:</strong> {starship && starship.hyperdrive_rating}
                            </Typography>
                            <Typography variant="h5" component="h5">
                                <strong>Passengers:</strong> {starship && starship.passengers}
                            </Typography>
                            <Typography variant="h5" component="h5">
                                <strong>Max Atmosphering Speed:</strong> {starship && starship.max_atmosphering_speed}
                            </Typography>
                            <Typography variant="h5" component="h5">
                                <strong>Manufacturer:</strong> {starship && starship.manufacturer}
                            </Typography>
                            <Typography variant="h5" component="h5">
                                <strong>Crew:</strong> {starship && starship.crew}
                            </Typography>
                            <Typography variant="h5" component="h5">
                                <strong>Cargo Capacity:</strong> {starship && starship.cargo_capacity}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )

}