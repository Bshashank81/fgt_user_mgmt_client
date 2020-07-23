import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TrendingUpSharpIcon from '@material-ui/icons/TrendingUpSharp';
import data from '../config.json'
const useStyles = makeStyles({
    root: {
        borderRadius:'10px',
        width: '400px',
        height: '350px',
        marginTop: '100px',
    },
    centered: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 30,
        color: 'black',
        fontWeight: 900,
       marginTop:'20px', 
    },
    pos: {
        marginBottom: 12,
    },
    logo: {
        width: '70px',
        height: '70px',
        fill: 'white',
        backgroundColor: "rgb(4,136,255)",
        borderRadius: "50%",
        padding:'5px',
    },
    subTitle: {
        marginTop: '20px',
    },
    blue:  {
        color: 'blue',
        fontWeight:900,
    },
    color: {
        marginTop:'30px',
        color: 'white',
        backgroundColor: 'rgb(4,136,255)',
        '&:hover': {
            color: 'white',
            backgroundColor: 'rgb(4,136,255)'
        },
    }
});

export default function Login() {
    const authLogin = () => {
        var domain = data.config.auth0.domain ;
        var client_id = data.config.auth0.clientid;
        var redirect_uri = data.config.auth0.redirecturi;
        const url = `https://${domain}/authorize?scope=openid%20profile%20email%20user_metadata%20picture&audience=login&response_type=token id_token&client_id=${client_id}&redirect_uri=${redirect_uri}&nonce=test&connection=google-oauth2`
        window.location = url;
    }
    const classes = useStyles();
    return (
        <div className={classes.centered}>
            <Card className={classes.root} >
            <CardContent>
                <Typography className={classes.title}  gutterBottom>
                        <Typography>
                            <TrendingUpSharpIcon fontSize="large" className={classes.logo}/>
                        </Typography>
                </Typography>
                    <Typography className={classes.title}>
                        Please Click on Login
                    </Typography>
                    <Typography className={classes.subTitle}>
                        to continue<span className={classes.blue}> to ZE-Transaction</span>
                     </Typography>
            </CardContent>
                <Button variant="contained" classes={{root:classes.color}} onClick={authLogin}>Login</Button>
            </Card>
            </div>
    );
}
