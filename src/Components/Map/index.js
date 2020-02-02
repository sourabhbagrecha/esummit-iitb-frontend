import React, {Component} from 'react';

class Map extends Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }    

    render() {
        return (
          <div id="mapid" style={{height: "180px"}}></div>
        );
    }
}


// app_id="XXOJPWnwsDKrDOEIER4l"
// app_code="vK0ingIp6yDd90am3wpsgedFbCvuI6f1Vmgrc0PfPsE"
// lat={18.9690}
// lng={72.8205}
// zoom={12}
// theme='normal.day'
//access secret: MK-ZsBeyG6RY2FlxdHAPJ_Q_0kUPoCNS9R68GcDkvouMLKkw_9FvnC82pxV1aadqmh4eRaL1Xb-wO68tJOSaTQ
// secret: 1UYwtvYClnSDASzoLam7NQ
// Rest:
// app id: 2bcJK1Hl38waLQG1TV9a
// apiKey: uSeFuOI4xOqoU_p3ZLKRaeso7c_7YVPEeazW-aD0WHY


export default Map;