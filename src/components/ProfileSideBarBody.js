import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    linksclass: {
        
        color: 'black',
        paddingTop: '0px',
        textDecoration: 'none',
        '&:hover': {
            color: 'black',
            textDecoration: 'none',
        },
    },
    active: {
     
        backgroundColor: "rgb(4,136,255)",
        color: 'white',
        '&:hover': {
            backgroundColor: "rgb(4,136,255)",
            opacity: 0.9
        }
    },
    font: {
        fontSize: '14px',
        
    }
}));
export default function DetailsProfileList() {
    const [selected, setSelected] = React.useState(2);
    const classes = useStyles();
    return (
        <div>
            <List component="nav" aria-label="secondary mailbox folders" >
                <Link className={classes.linksclass}>
                    <div>
                        <ListItem button={(selected >> 1) & 1} classes={{ button: classes.active }} onClick={() => { setSelected(2) }}>
                            <ListItemText classes={{primary:classes.font}} primary="Profile settings" />
                        </ListItem>
                    </div>
                </Link>
                <Link className={classes.linksclass}>
                    <div>
                        <ListItem button={(selected >> 2) & 1} classes={{ button: classes.active }} onClick={() => { setSelected(4) }}>
                            <ListItemText classes={{ primary: classes.font }} primary="Manage transactions" />
                        </ListItem>
                    </div>
                </Link>
                <Link className={classes.linksclass}>
                    <div>
                        <ListItem button={(selected >> 3) & 1} classes={{ button: classes.active }} onClick={() => { setSelected(8) }}>
                            <ListItemText classes={{ primary: classes.font }} primary="Manage categories" />
                        </ListItem>
                    </div>
                </Link>
                <Link className={classes.linksclass}>
                    <div>
                        <ListItem button={(selected >> 4) & 1} classes={{ button: classes.active }} onClick={() => { setSelected(16) }}>
                            <ListItemText classes={{ primary: classes.font }} primary="Manage bank account" />
                        </ListItem>
                    </div>
                </Link>
                <Link className={classes.linksclass}>
                    <div>
                        <ListItem button={(selected >> 5) & 1} classes={{ button: classes.active }} onClick={() => { setSelected(32) }}>
                            <ListItemText classes={{ primary: classes.font }} primary="Support" />
                        </ListItem>
                    </div>
                </Link>
                <Link className={classes.linksclass}>
                    <div>
                        <ListItem button={(selected >> 6) & 1} classes={{ button: classes.active }} onClick={() => { setSelected(64) }}>
                            <ListItemText classes={{ primary: classes.font }} primary="Privacy" />
                        </ListItem>
                    </div>
                </Link>
                <div className={classes.margin}>
                    <Divider />
                </div>
            </List>
        </div>
    );
}
