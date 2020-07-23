import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ProfileTabs from './ProfileTabs'
import ProfileSideBar from './ProfileSideBar'
import AppBar from './AppBar'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import data from '../config.json'
import { Redirect } from 'react-router-dom'
import Brand from '../atoms/Brand'
import MuiAlert from '@material-ui/lab/Alert';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    top: {
        display: 'flex',
        marginTop: '100px',
    },
    margins: {
        marginRight: '10px',
        marginLeft: '10px',
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


function Profile(props) {
    const [customError, setcustomError] = useState(null);
    const [result, setResult] = useState();
    const [basicData, setBasicData] = useState();
    const [loadingUserData, setLoadingUserData] = useState(false);
    const [loadingSettingData, setLoadingSettingData] = useState(false);
    const [abc, setAbc] = useState();
    const [open, setOpen] = React.useState(false);

    const settingsApi = () => {
        var accessToken = localStorage.getItem("accessToken");
        fetch(data.config.restapi.settings, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + accessToken,
            },

        }).then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }
            return response.json();
        })
            .then((data) => { return data; })
            .then((data) => setResult(data))
            .then(() => { setLoadingSettingData(true) })
            .catch((error) => {
                console.error('Error Occured at:', error, typeof (error));
                if (error.message == "401") {
                    setcustomError("Unauthorized Access");
                }
                else if (error.message == "404") {
                    setcustomError("Invalid User");
                }
                else if (error.message == "500") {
                    setcustomError("Internal Server Error");
                }
                else {
                    setcustomError("Unable to fetch resource")
                }
                return <Redirect to="/error" />
            });

    }
    const userApi = () => {
        var accessToken = localStorage.getItem("accessToken");
        var apiurl = data.config.restapi.login;
        fetch(apiurl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken,
            },
        }).then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }
            return response.json();
        })
            .then((data) => { return data; })
            .then((data) => setBasicData(data))
            .then(() => setLoadingUserData(true))
            .catch((error) => {
                if (error.message === "401") {
                    setcustomError("Unauthorized Access");
                }
                else if (error.message === "404") {
                    setcustomError("Invalid User");
                }
                else if (error.message === "500") {
                    setcustomError("Internal Server Error");
                }
                else {
                    setcustomError("Unable to fetch resource")
                }
            });
    }
    useEffect(() => {
        userApi();
        settingsApi();
    }, [abc])

    const handleChange = (event) => {

        var res = { ...result };
        var name = event.target.name;
        var array = name.split("_");
        res[array[0]][array[1]] = event.target.checked ? event.target.checked : event.target.value;
        setResult(res);
    };
    const handleChangeCountry = (event) =>{
        var countryName = event.target.innerText.split("(")[0].substring(4).trim();
        var name = "country";
        setBasicData({ ...basicData, [name]: countryName });
    }
    const handleChangeUser = (event) => {
        setBasicData({ ...basicData, [event.target.name]: event.target.value });
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }

        setOpen(false);
      };

    const handleChangePicture = (data) =>{
        setBasicData({ ...basicData, ["profilePicture"]: data });
        console.log(basicData.profilePicture);
    }

    const postToApi = (event) => {
        var accessToken = localStorage.getItem("accessToken");
        fetch(data.config.restapi.settings, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken,
            },
            body: JSON.stringify(result),

        }).then(response => {
            console.log("response---", response)
            if (!response.ok) {
                console.log("status--------" + response.status);
                throw new Error(response.status)
            }
            return response.json();
        })
            .then((data) => { console.log("data", data); return data; })
            .then((data) => {
                setOpen(true);
            })
            .catch((error) => {
                console.error('Error Occured at:', error, typeof (error));
                if (error.message == "401") {
                    setcustomError("Unauthorized Access");
                }
                else if (error.message == "404") {
                    setcustomError("Invalid User");
                }
                else if (error.message == "500") {
                    setcustomError("Internal Server Error");
                }
                else {
                    setcustomError("Unable to fetch resource")
                }
                return <Redirect to="/error" />
            });

    };

    const postToUserApi = (event) => {
        var accessToken = localStorage.getItem("accessToken");
        fetch(data.config.restapi.login, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken,
            },
            body: JSON.stringify(basicData),

        }).then(response => {
            console.log("response---", response)
            if (!response.ok) {
                console.log("status--------" + response.status);
                throw new Error(response.status)
            }
            return response.json();
        })
            .then((data) => { localStorage.setItem("user",JSON.stringify(data)); })
            .then(() => {
                setOpen(true);
            })
            .catch((error) => {
                console.error('Error Occured at:', error, typeof (error));
                if (error.message == "401") {
                    setcustomError("Unauthorized Access");
                }
                else if (error.message == "404") {
                    setcustomError("Invalid User");
                }
                else if (error.message == "500") {
                    setcustomError("Internal Server Error");
                }
                else {
                    setcustomError("Unable to fetch resource")
                }
                return <Redirect to="/error" />
            });

    };

    const classes = useStyles();
    return (
        <div>
            {loadingUserData && loadingSettingData &&
                <div>
                    <div>
                    {/* <AppBar><div style={{ marginTop: 15 }}> <Link className={classes.linksclass} to="/dashboard/home"><HomeOutlinedIcon /></Link></div></AppBar> */}
                    <AppBar><Brand /></AppBar>
                    </div>
                    <div className={classes.top}>
                        <Grid item xs={3}>
                            <div className={classes.margins}>
                                <ProfileSideBar />
                            </div>
                        </Grid>
                        <Grid item xs={9}>
                            <div className={classes.margins}>
                                <ProfileTabs
                                    result={result}
                                    method={(event) => handleChange(event)}
                                    handleChangeUser={(event) => handleChangeUser(event)}
                                    postToApi={(event) => postToApi(event)}
                                    postToUserApi={(event) => postToUserApi(event)}
                                    basicData={basicData}
                                    handleChangeCountry={(event)=>handleChangeCountry(event)}
                                    handleChangePicture={(data)=>handleChangePicture(data)}
                                    open={open}
                                    handleClose={(event,reason)=>handleClose(event,reason)}/>
                            </div>
                        </Grid>
                    </div>
                </div>

            }
        </div>

    )
}

export default Profile