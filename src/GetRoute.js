import React, { useEffect, useState } from 'react';
import { sampleData } from './SampleData';

function GetRoute(props) {
  const {id} = props.match.params;
  const [option, setOption] = useState(sampleData.find(s => s._id === id));
  useEffect(() => {
    console.log({id});
    const response = sampleData.find(s => s._id === id);
    console.log({response})
    setOption(response);// eslint-disable-next-line
  }, []);
  return (
    <>
      <img
        src={`https://image.maps.ls.hereapi.com/mia/1.6/routing?apiKey=vK0ingIp6yDd90am3wpsgedFbCvuI6f1Vmgrc0PfPsE&waypoint0=19.124333999999998,72.9106086&waypoint1=${option.position.lat},${option.position.lng}&lc=1652B4&lw=6&t=0&ppi=320&w=300&h=500`}
        alt="RouteImage"
      />
    </>
  )
}

export default GetRoute
