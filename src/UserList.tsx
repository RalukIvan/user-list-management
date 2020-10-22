import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

interface Props {
    users: User[];
}

export const UserList: React.FC<Props> = ({ users }) => {
  return (
    <div className="UserList">
        <h2>My list of users</h2>
        <List>
        { users.map((item: User, index: number) => {
            const fullname = `${item.firstname} ${item.lastname}`
            return (
                <div key={index}>
                    <ListItem alignItems="flex-start" data-testid={`userItem${index}`}>
                        <ListItemAvatar>
                            <Avatar alt={fullname} src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={fullname}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        color="textPrimary"
                                    >
                                        {item.email}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </div>
                )
            })
        }
        </List>
    </div>
  );
};