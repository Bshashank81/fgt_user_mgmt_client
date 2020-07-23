import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Brand from '../atoms/Brand'
import { ProfileFooter, ProfileHeader } from '../atoms/ProfileAtom'
import ProfileSideBarBody from './ProfileSideBarBody'
import ProfileBody from './ProfileBody'
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 340,
        height:560,
        backgroundColor: theme.palette.background.paper,
        border: '1px solid rgb(234,237,243)'
    },
    label: {
        marginTop: 15,
        marginBottom:10,
        textAlign: 'left',
        color: 'rgb(158,160,165)',
        fontSize:14,
        marginLeft:15,
    },
}));
export default function DetailsProfileList() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/* <Brand />
            <Divider /> */}
                <div className={classes.label}>
                YOUR DETAILS
                </div>
            <ProfileSideBarBody />
           <ProfileFooter />
        </div>
    );
}
