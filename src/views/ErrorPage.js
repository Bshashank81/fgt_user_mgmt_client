import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
const useStyles = makeStyles({
  root: {
    borderRadius: '10px',
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
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 900,
    marginTop: '20px',
    color:'#cc0000',
  },
  subTitle: {
    marginTop: '20px',
  },
  color: {
    marginTop: '30px',
    color: 'white',
    backgroundColor: 'rgb(4,136,255)',
    '&:hover': {
      color: 'white',
      backgroundColor: 'rgb(4,136,255)'
    },
  }
})

const ErrorPage = (props) => {
  const classes = useStyles();
  const getMessage = ()=>{
  var url = window.location.href;
  var res = decodeURI(url.split("?")[1]);
  return res;
}
  const redirect = () => {
    window.location.href=window.location.origin;
  }
  return (
    <div className={classes.centered}>
      <Card className={classes.root} >
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            <Typography>
              <img src={require('../assets/errorlogo.png')} />
            </Typography>
          </Typography>
          <Typography className={classes.title}>
            {getMessage()}
          </Typography>
          <Typography className={classes.subTitle}>
            Please click on below button to go back to the login page
          </Typography>
        </CardContent>
        <Button classes={{ root: classes.color }} variant="contained" onClick={redirect}>Go Back</Button>
      </Card>
    </div>
  );
};
export default ErrorPage;