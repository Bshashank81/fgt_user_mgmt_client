import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
        width: '200px',
        borderRadius: '6px',
        border: '1px,solid,black',
        color: 'rgb(22,101,216)',
        backgroundColor: 'rgb(255, 255, 255)',
        textAlign: 'center',
        fontWeight: 900,
        '&:hover': {
            backgroundColor: "rgb(4,136,255)",

            color: 'white'
        }
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    content: {
        marginTop: "14px",
        fontSize: 12,
        textAlign: 'center',
        fontWeight: 500,
        color: 'black',
    },
    pos: {
        marginBottom: 12,
    },

});
export default function Budgetcard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography>
                    {/* Create your budget */}
                    {props.title}
             </Typography>
                <Typography className={classes.content}>
                    {/* Take control on your expenses by creating a budget on your spendings */}
                    {props.content}
                </Typography>
            </CardContent>
        </Card>
    );
}