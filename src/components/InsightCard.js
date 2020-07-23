import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import insight from '../assets/insight.png'
const useStyles = makeStyles({
    root: {
        width: '300px',
        height:'250px',
        borderRadius: '6px',
        border: '1px,solid,black',
        backgroundColor: 'rgb(255, 255, 255)',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: '20px',
        fontWeight: 500,
        color: 'black'
        
    },
    content: {
        fontSize: '14px',
        textAlign: 'center',
        marginTop:'20px',
    },
    pos: {
        marginBottom: 12,
        fontSize: '14px',
    },
    center: {
        textAlign: 'center',
        marginTop: '30px',
        marginBottom: '30px',
        fontSize: '14px',
       
    },
});
export default function InsightCard() {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title}>
                    <div>
                        Insights
                         <Divider style={{ marginTop: '10px' }} />
                    </div>
                </Typography>
                <div className={classes.center}>
                    <img src={insight} alt="Logo" height='80px'/>
                </div>
                <Typography className={classes.content}>
                  
                   No insights are here
                </Typography>
            </CardContent>
        </Card>
    );
}
