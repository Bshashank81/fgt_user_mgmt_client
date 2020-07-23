import React from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const useStyles = makeStyles((theme) => ({
    font: {
        fontSize: '14px',
    }
}));
export default function SimpleList() {
    const classes = useStyles();
    return (
        <div>
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                    <ListItemText classes={{ primary: classes.font }} primary="Manage transactions" />
                </ListItem>
                <ListItem button>
                    <ListItemText classes={{ primary: classes.font }} primary="Manage categories" />
                </ListItem>
                <ListItem button>
                    <ListItemText classes={{ primary: classes.font }} primary="Manage bank account" />
                </ListItem>
                <ListItem button>
                    <ListItemText classes={{ primary: classes.font }} primary="Support" />
                </ListItem>
                <ListItem button>
                    <ListItemText classes={{ primary: classes.font }} primary="Privacy" />
                </ListItem>
            </List>
        </div>
    );
}