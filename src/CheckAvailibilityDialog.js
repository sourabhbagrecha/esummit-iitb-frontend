import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, CircularProgress, Typography, DialogContent, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function CheckAvailibilityDialog(props) {
  const {dialog, handleClose, option} = props;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])
  return (
    <Dialog onClose={handleClose} open={dialog}>
      <DialogTitle>Checking Availibility</DialogTitle>
      <DialogContent>
        {
          loading?
          <CircularProgress/>
          :
          <div>
            <Typography variant="body1">
              That's great, {option.name} is available!
            </Typography>
            <Link to={`/get-route/${option._id}`}>
              <Button variant="contained" color="primary">
                Get Directions!
              </Button>
            </Link>
          </div>
        }
      </DialogContent>
    </Dialog>
  )
}

export default CheckAvailibilityDialog;