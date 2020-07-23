import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { Link} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    title: {
        // width: '30px',
        height: '30px',
        fill: 'white',
        // backgroundColor: "rgb(4,136,255)",
        borderRadius: "50%",
        padding: '5px',
        marginBottom: '8px',
        marginRight: '10px',
        fontSize: '28px',
        fontWeight: 900,
        color:'#485460',

    },
    linksclass: {
        color: 'black',
        paddingTop: '0px',
        textDecoration: 'none',
        '&:hover': {
            color: 'black',
            textDecoration: 'none',
        },
    },

}));
export default function DetailsProfileList() {
    const classes = useStyles();
    return (
        <div>
            <List component="nav" aria-label="main mailbox folders">
              
                <Link className={classes.linksclass} to="/dashboard/home">
                    <div className={classes.title}>
                        ZE-Transact
                     </div>
                </Link>
               
            </List>
        </div>

    );
}
