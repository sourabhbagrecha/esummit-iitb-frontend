import React, { Component } from 'react';
import MapApp from './MapApp';
import { CircularProgress } from '@material-ui/core';

class HomePage extends Component {
  state={
    lat: null,
    lng: null,
    loading: true
  }
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(this.setLocation);
  }
  setLocation = (position) => {
    console.log({position});
    this.setState({lat: position.coords.latitude, lng: position.coords.longitude });
    this.setState({loading: false})
  }
  render(){
    return (
      !this.state.loading ?
      <MapApp lat={this.state.lat} lng={this.state.lng} />
      :
      <CircularProgress/>  
    )
  }
};

export default HomePage
