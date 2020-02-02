import React from 'react';
import './ShowRoute.css';

const hereCredentials = {
   id: 'UQ75LhFcnAv0DtOUwBEA',
   code: 'f5nyezNmYF4wvuJqQgNSkg'
}

const geocodeUrl = (query) => `https://geocoder.api.here.com/6.2/geocode.json?app_id=${hereCredentials.id}&app_code=${hereCredentials.code}&searchtext=${query}`;
const routeUrl = (start, end, mode) => `https://route.api.here.com/routing/7.2/calculateroute.json?app_id=${hereCredentials.id}&app_code=${hereCredentials.code}&waypoint0=geo!${start}&waypoint1=geo!${end}&mode=fastest;${mode};traffic:disabled&routeattributes=shape`

class ShowRoute extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         table: [
            {
               start: '701 Pike St. Seattle',
               end: '954 E Union St. Seattle',
               provider: 'uber',
               mode: 'car',
               shape: []
            }
         ]
      }
   }

   newRow = () => {
      const copy = Object.assign(this.state.table, {});
      copy.push({
         start: '', end: '', provider: '', mode: 'pedestrian', shape: []
      });
      this.setState({
         table: copy
      });
   }

   editRow = (val, row, col) => {
      const table = Object.assign(this.state.table, {});
      table[col][row] = val;
      this.setState({ table })
   }

   go = async () => {
      console.log('click')
      const geocodePromises = this.state.table.map(async (row, i) => {
         const start = await fetch(geocodeUrl(row.start)).then(res => res.json());
         const end = await fetch(geocodeUrl(row.end)).then(res => res.json());
         // console.log(sxtart);
         row.startCoordinates = start.Response.View[0].Result[0].Location.NavigationPosition[0];
         row.endCoordinates = end.Response.View[0].Result[0].Location.NavigationPosition[0];
         return row;
      })

      const geocoded = await Promise.all(geocodePromises);


      const routePromises = geocoded.map(async (row, i) => {
         const path = await fetch(
            routeUrl(
               row.startCoordinates.Latitude + ',' + row.startCoordinates.Longitude,
               row.endCoordinates.Latitude + ',' + row.endCoordinates.Longitude,
               row.mode
            )
         ).then(res => res.json())
         .then(res => {
            console.log(res.response.route[0].shape.length)
            return res.response.route[0].shape.map(x => {
               
               const vals = x.split(',');
               return [Number(vals[1]), Number(vals[0])]
            });
         })
         row.shape = path;
         return row;
      });
      const routes = await Promise.all(routePromises);
      console.log(routes);

      const geojson = {
         type: 'FeatureCollection',
         features: routes.map(r => {
            return {
               geometry: {
                  type: 'LineString',
                  coordinates: r.shape
               },
               type: 'Feature',
               properties: {
                  provider: r.provider,
                  startAddress: r.start,
                  endAddress: r.end,
                  mode: r.mode
               }
            }
         })
      }


      const element = React.createElement("a");
      const file = new Blob([JSON.stringify(geojson, null, 3)], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = "routes.geojson";
      document.body.appendChild(element); // Required for this to work in FireFox
      element.click();
   }


   render() {
      return (
         <div className="app">
         </div>
      )
   }
}

export default ShowRoute;