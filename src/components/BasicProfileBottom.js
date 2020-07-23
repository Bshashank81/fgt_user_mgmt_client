import React, { useState } from "react";
import { makeStyles, withStyles, fade } from "@material-ui/core/styles";
import { Link, Redirect } from 'react-router-dom'
import {logout} from "../utils/index"
import data from '../config.json'
const useStyles = makeStyles({
    flex: {
        display: "flex",
        justifyContent: "space-between",


    },
    flexpassword: {
        display: "flex",
        justifyContent: 'space-between',
        alignContent: 'center',
        height: '30px'
    },
    buttonPadding: {
        width: "10px",
        fontSize: '14px',
        fontWeight: 500,
        color: "rgb(22,101,216)",
        backgroundColor: "none",
        borderBottom: "2px dashed rgb(22,101,216)",
        textTransform: "none",
        height: "30px",
        '   &:focus': {
            // color: "rgb(0,0,225)",
            backgroundColor: "rgb(234, 237, 243)",
            opacity: 0.15,
        },
    },
    mediumBold: {
        fontWeight: 600,
    },
    bold: {
        fontWeight: 700,
        fontSize: '18px',
        marginBottom: '20px',

    },
    textContent: {
        fontSize: '14px',
        color: "rgb(72,84,96)",
        marginTop: '10px',
    },
    passwordHeading: {
        fontSize: '18px',
        color: "rgb(72,84,96)",
        fontWeight: 700,

    },
    deleteHeading: {
        fontSize: '18px',
        fontWeight: 900,
        color: "rgb(22,101,216)",
        marginBottom: "20px",
        borderBottom: "2px dashed rgb(22,101,216)",
        '   &:focus': {
            color: "red",
            borderBottom: "2px dashed red",
        },
    },
    linksclass: {
        color: "rgb(22,101,216)",
        paddingTop: '0px',
        textDecoration: 'none',
        '&:hover': {
            color: '#CC0000',
            textDecoration: 'none',
            borderBottom: "2px dashed #CC0000",
        },
    },
    change: {
        color: "rgb(22,101,216)",
        paddingTop: '0px',
        textDecoration: 'none',
        '&:hover': {
            borderBottom: "2px dashed rgb(22,101,216) ",
            textDecoration:'none',
        }

    },

});

function ProfileEmail(props) {

    const classes = useStyles();
    return (
        <div className={classes.flex}>
            <div >
                <span className={classes.passwordHeading}>Email</span><br />
                <div className={classes.textContent}>Your email address is
                 <span className={classes.mediumBold}> {props.email}</span>
               </div>

            </div>
            <div>
                <Link className={classes.change}>Change</Link>
            </div>
        </div>
    );
}
function ProfilePassword() {

    const classes = useStyles();
    return (
        <div className={classes.flexpassword}>
            <div>
                <span className={classes.passwordHeading}>Password</span>
            </div>
            <div >
                <Link className={classes.change}>Change</Link>
            </div>
        </div>
    );
}
function ProfileDeleteAccount() {


    const [customError, setcustomError] = useState(null);

    const handleDelete = () =>{
        var flag = window.confirm("You'll be deleted permanently, continue?");
        if(flag)
            postToApi();
    }


    const postToApi = () =>{
        var accessToken = localStorage.getItem("accessToken");
        fetch(data.config.restapi.login, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + accessToken,
              },
        }).then(response => {
            console.log("response---", response)
            if (!response.ok) {
                console.log("status--------" + response.status);
                throw new Error(response.status)
            }
            logout();
            window.location.href=window.location.origin;
        })
            .catch((error) => {
                console.error('Error Occured at:', error, typeof (error));
                if (error.message == "401") {
                    setcustomError("Unauthorized Access");
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
            <div>
                <span className={classes.deleteHeading}>
                    <Link
                        className={classes.linksclass}
                        onClick={()=>handleDelete()}
                    >Delete my account permanently</Link>
                </span>

            </div>

            <div className={classes.textContent}>
                You will receive email to confirm your decision<br />
             If you delete the account data will be permanently erased. so, please
             turn on sync data to keep your files safe.

          </div>
        </div>
    );
}
export { ProfileEmail, ProfilePassword, ProfileDeleteAccount }