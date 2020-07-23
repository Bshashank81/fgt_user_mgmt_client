import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import {ProfileFooter,ProfileHeader} from '../atoms/ProfileAtom'
import ProfileBody from './ProfileBody'
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        minWidth: 340,
        margin:15,
        backgroundColor: theme.palette.background.paper,
    },
    margin: {
        marginTop:10,
    },
}));
export default function SimpleList() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <ProfileHeader />
          <Divider />
          <ProfileBody />
          <div className={classes.margin}>
            </div>
            <Divider />
        <ProfileFooter />
        </div>
    );
}
