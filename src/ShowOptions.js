import React from 'react';
import { sampleData } from './SampleData'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core'
import { PersonOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';

function ShowOptions(props) {
  const renderData = sampleData.map(s => (
    <>
      <Link to={`/option/${s._id}`} style={{textDecoration: "none"}}>
        <ListItem button>
            <ListItemAvatar>
              <Avatar>
                <PersonOutline />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
            primary={s.name}
            secondary={`₹ ${s.rate} per hour, ${s.distance} km away`} />
        </ListItem>
      </Link>
    </>
  ));
  return (
    <List>
      {renderData}
    </List>
  )
};

export default ShowOptions;