import React from 'react';
import HEREMap from 'here-maps-react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({
  root: {
    height: "500px"
  }
}));

function SimpleMap(props) {
  const classes = useStyles();
  return (
    <HEREMap
      className={classes.root}
      appId="UQ75LhFcnAv0DtOUwBEA"
      appCode="f5nyezNmYF4wvuJqQgNSkg"
      center={{ lat: 10.998666, lng: -63.79841 }}
      zoom={12}
    />
  )
};

export default SimpleMap;