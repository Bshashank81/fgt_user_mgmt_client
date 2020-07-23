import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TrendingUpSharpIcon from '@material-ui/icons/TrendingUpSharp';
const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: '10px',
        fontWeight: 700,
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    logo: {
        width: '30px',
        height: '30px',
        fill: 'white',
        backgroundColor: "rgb(4,136,255)",
        borderRadius: "50%",
        padding: '5px',
        marginBottom: '6px',
        marginRight: '10px',
    },
}));
function Brand() {
    const classes = useStyles();
    return (
        <div>
            <div>
                <Typography className={classes.title} variant="h5" noWrap>
                    <TrendingUpSharpIcon fontSize="large" className={classes.logo} />
                                ZE - Transact
                    </Typography>
            </div>
        </div>
    )
}

export default Brand
