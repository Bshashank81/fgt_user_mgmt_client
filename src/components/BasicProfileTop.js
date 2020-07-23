import React, { useState } from "react";
import { makeStyles, withStyles, fade } from "@material-ui/core/styles";
import { FormControl, InputLabel, Input, InputBase, Select, MenuItem } from "@material-ui/core";
import CountrySelect from "./CountryField"
const useStyles = makeStyles((theme) => ({
    alignField: {
        paddingBottom: "20px"
    },
    labelSize: {
        fontSize: "20px",
        color: "rgb(72,84,96)",
    },
    formControl: {
        backgroundColor: "white",
        fontSize: 16,
        width: "350px",
    },
    circle: {
        height: "150px",
        width: "150px",
        backgroundColor: "pink",
        borderRadius: "50%"
    }

}));
const BootstrapInput = withStyles((theme) => ({
    root: {
        "label + &": {
            marginTop: theme.spacing(3),
        },
        fontSize: '14px',
    },
    margin: {
        margin: theme.spacing(1),
    },
    input: {
        borderRadius: 4,
        position: "relative",
        backgroundColor: "white",
        border: "1px solid #ced4da",
        fontSize: '14px',
        width: "300px",
        height: "27px",
        padding: "6px 12px",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        "&:focus": {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },

}))(InputBase);

function ProfileFormFields({ values, handleChange,handleChangeCountry }) {
    const classes = useStyles();



    return (
        <div>

            <div className={classes.alignField}>
                <FormControl className={classes.margin}>
                    <InputLabel shrink htmlFor="name" className={classes.labelSize} >
                        User Name
        </InputLabel>
                    <BootstrapInput name="name" value={values.name} id="name" onChange={(event) => handleChange(event)} autoComplete="off"/>
                </FormControl>
            </div>
            <div className={classes.alignField}>
                <FormControl className={classes.margin}>
                    <InputLabel shrink htmlFor="phone" className={classes.labelSize}>
                        Phone Number
        </InputLabel>
                    <BootstrapInput name="phone" value={values.phone} id="phone" onChange={(event) => handleChange(event)} autoComplete="off"/>
                </FormControl>
            </div>

            <CountrySelect country={values.country}
                handleChangeCountry={(event)=>handleChangeCountry(event)}
            />

        </div>
    );
}


export { ProfileFormFields }