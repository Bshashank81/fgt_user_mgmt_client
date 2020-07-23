import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import SortIcon from '@material-ui/icons/Sort';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
const useStyles = makeStyles({
    root: {
        width: '300px',
        height: '250px',
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
    align: {
        display: 'flex',
        justifyContent:'space-between'
    },
    content: {
        fontSize: '14px',
        textAlign: 'center',
        marginTop:'60px'
    },
    pos: {
        marginBottom: 12,
    },
    margin: {
        marginLeft: '20px',
        
    }
});
export default function TrasactionsCard() {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <div className={classes.align}>
                <Typography className={classes.title}>
                    Transactions
                </Typography>
                    <div>   
                        <AddIcon style={{marginRight:'10px'}}/>
                        <CalendarTodayIcon style={{ marginRight: '10px' }}/>
                        <SortIcon style={{ marginRight: '10px' }}/>
                </div>
                </div>
                <Divider style={{ marginTop: '10px' }}/>
                <Typography className={classes.content}>
                    Looks like you didn’t create any transactions to show the data. Please, here to keep in track
                </Typography>
            </CardContent>
        </Card>
    );
}
