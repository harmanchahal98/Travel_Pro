import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputBase,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from "@material-ui/core";
import useStyles from "./styles";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
const List = ({ places, childClicked, isLoading, type, setType, rating, setRating }) => {
  const classes = useStyles();
  
  const [elrefs, setElrefs] = useState([]);

  useEffect(()=>{
    const refs = Array(places?.length).fill().map((_,i)=> elrefs[i] || createRef());
    setElrefs(refs)
  }, [places])
  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Resturants, Hotels & Attractions arround you
      </Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem"/>
        </div>
      ) : (
        <>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="resturants">Resutant's</MenuItem>
          <MenuItem value="hotels">Hotel's</MenuItem>
          <MenuItem value="attractions">Attraction's</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Ratings</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3 stars</MenuItem>
          <MenuItem value={4}>Above 4 stars</MenuItem>
          <MenuItem value={5}>Luxary hotels</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid ref={elrefs[i]} item key={i} xs={12} >
            <PlaceDetails place={place} Selected={Number(childClicked)===i} refProps={elrefs[i]}/>
          </Grid>
        ))}
      </Grid>
      </>
      )}
    </div>
  );
};

export default List;
