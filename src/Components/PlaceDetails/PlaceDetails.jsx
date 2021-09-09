import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import { Rating } from "@material-ui/lab";
import useStyles from "./styles";
const PlaceDetails = ({ place, Selected, refProps }) => {
  const classes = useStyles();

  if (Selected)
    refProps?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div>
      <Card elevation={6}>
        <CardMedia
          style={{ height: 350 }}
          image={
            place.photo
              ? place.photo.images.large.url
              : "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
          }
          title={place.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {place.name}
          </Typography>
          <Box display="flex" justifyContent="space-between">
            <Rating value={Number(place.rating)} readOnly />
            <Typography gutterBottom variant="subtitle1">
              out of {place.num_reviews} reviews
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Ranking</Typography>
            <Typography gutterBottom variant="subtitle1">
              {place.ranking}
            </Typography>
          </Box>
          {place?.awards?.map((award) => (
            <Box
              my={1}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <img src={award.images.small} alt={award.display_name} />
              <Typography variant="subtitle2" color="textSecondary">
                {award.display_name}
              </Typography>
            </Box>
          ))}
          {place?.cuisine?.map(({ name }) => (
            <Chip
              key={name}
              size="small"
              label={name}
              className={classes.chip}
            />
          ))}
          {place?.address && (
            <Typography
              gutterBottom
              variant="subtitle2"
              color="textSecondary"
              className={classes.subtitle}
            >
              <LocationOnIcon /> {place.address}
            </Typography>
          )}
          {place?.phone && (
            <Typography
              gutterBottom
              variant="subtitle2"
              color="textSecondary"
              className={classes.spacing}
            >
              <PhoneIcon /> {place.phone}
            </Typography>
          )}
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => window.open(place.web_url, "_blank")}
            >
              TripAdvisor
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => window.open(place.website, "_blank")}
            >
              website
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlaceDetails;
