import React, { useEffect } from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const StarshipsCards = (props) => {
    const { starships } = props;

    useEffect(() => {
    }, [props])

    return (
            <Grid container spacing={5}>
                {starships && starships.map(starship => {
                    return (
                        <Grid xs={3}>
                            <Card style={{maxHeight:400, margin:25, minWidth:250}}>
                                <CardContent>
                                    <Typography gutterBottom>
                                        <img src={require('../../images/ship_img.png')} alt="Star Wars Ship Logo"></img>
                                    </Typography>
                                    <Typography component="div">
                                        <strong className="card-title">{starship.name}</strong>
                                        <p className="card-text">
                                            Model: {starship.model}
                                        </p>
                                        <p className="card-text">
                                            Hyperdrive Rating: {starship.hyperdrive_rating}
                                        </p>
                                    </Typography>
                                    <Link
                                        to={
                                            { pathname: `/starshipdetails/${starship.url.substring(0, starship.url.length - 1).split('/').slice(-1).pop()}` }
                                        }
                                        className="btn btn-warning"

                                    >Details</Link>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
    )
}