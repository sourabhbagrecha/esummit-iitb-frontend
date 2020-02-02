import React, { useEffect, useState } from 'react';
import { Paper, Container, Typography, Button } from '@material-ui/core';
import { sampleData } from './SampleData';
import CheckAvailibilityDialog from './CheckAvailibilityDialog';

function ShowOption(props) {
  const {id} = props.match.params;
  const [option, setOption] = useState({});
  const [dialog, setDialog] = useState(false);
  useEffect(() => {
    console.log({id});
    const response = sampleData.find(s => s._id === id);
    console.log({response})
    setOption(response);
    // eslint-disable-next-line
  }, []);
  const handleDialogClose = () => {
    setDialog(false);
  }
  return (
      <Container maxWidth="xs">
        <Paper elevation={3} style={{padding: "1rem", margin: "30px auto 0 auto"}}>
          <Typography variant="h3">
            {option.name}
          </Typography>
          <Typography variant="body1">
            {`Hourly Rate: ₹ ${option.rate}`}
          </Typography>
          <Typography variant="caption">
            {`Orders Fulfilled: ${option.ordersFulfilled}`}
          </Typography>
          <Button variant="contained" color="secondary" onClick={() => setDialog(true)}>
            Check Availability
          </Button>
          <CheckAvailibilityDialog dialog={dialog} option={option} handleClose={handleDialogClose} />
        </Paper>
      </Container>
  )
}

export default ShowOption;