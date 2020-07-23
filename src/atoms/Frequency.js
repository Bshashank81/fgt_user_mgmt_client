import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
function Frequency(props) {
    const useStyles = makeStyles((theme) => ({
        formControl: {
            fontSize: '14px',
            '&:focus': {
                outline: 'none',
                border: 'none',
                textDecoration: 'none'
            },
        },
        selectEmpty: {
            width: 130,
            height: 35,
            marginLeft: 12,
            fontSize: '14px',

        },
        top: {

        }
    }));
    const classes = useStyles();
    // const [age, setAge] = React.useState('');

    // const handleChange = (event) => {
    //     setAge(event.target.value);
    // };
    return (
        <div>
            <FormControl variant="outlined" className={classes.formControl}>
                <div>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        name={props.name}
                        value={props.value}
                        onChange={(event) => props.method(event)}
                        displayEmpty
                        className={classes.selectEmpty}
                        inputProps={{ 'aria-label': 'Without label' }}

                    >

                        <MenuItem value={props.one}>{props.one}</MenuItem>
                        <MenuItem value={props.two} >{props.two}</MenuItem>
                        <MenuItem value={props.three} >{props.three}</MenuItem>
                    </Select>
                </div>
            </FormControl>
        </div>
    )
}

export default Frequency
