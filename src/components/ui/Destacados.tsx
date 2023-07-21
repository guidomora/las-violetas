import React from 'react'
import { Box, Card, CardActionArea, CardMedia, Chip, Grid, Link, Typography } from '@mui/material';
import NextLink from "next/link"
import coronita from "../../../public/images/corona.png"

const Destacados = () => {
    return (
        <Grid>
            <Card>
                <NextLink legacyBehavior href={""} passHref>
                    <Link>
                        <Typography>Titulo del producto</Typography>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            image={"../../../public/images/corona.png"}
                            >

                            </CardMedia>
                        </CardActionArea>
                        <Chip label="$200.000" />
                    </Link>
                </NextLink>

            </Card>
        </Grid>
    )
}

export default Destacados