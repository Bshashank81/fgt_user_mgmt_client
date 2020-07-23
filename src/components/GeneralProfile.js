import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GenralProfileSettings from '../atoms/GenralProfileSettingName'
import GeneralProfileCheckBox from './GeneralProfileCheckBox'
import Frequency from '../atoms/Frequency'
import Messages from './Messages'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontWeight: '16px',
        backgroundColor: theme.palette.background.paper,
        fontSize: '14px',
    },
    red: {
        backgroundColor: 'white',
        boxShadow: "0px 0px 1px #9E9E9E",
        fontSize: '14px',

    },

    color: {
        color: 'black',
        paddingTop: '20px',
        fontSize: '14px',
    },
    align: {
        textAlign: 'bottom',
        fontSize: '14px',
    },
    text: {

        textTransform: 'none',
        fontWeight: 500,
        fontSize: '14px',
        textAlign: 'center',
        '&:focus': {
            outline: 'none',
            border: 'none',
        },
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '14px',

    },
    label: {
        marginBottom: 10,
        textAlign: 'left',
        color: 'rgb(158,160,165)',
        fontSize: '14px',


    },
    labelmessage: {
        marginBottom: 10,
        textAlign: 'left',
        color: 'rgb(158,160,165)',
        fontSize: '14px',
        marginLeft: 30,

    },
    spacearound: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        marginLeft: 45,
        fontSize: '14px',
    },
    margin: {
        marginTop: 15,
        marginBottom: 30,
        fontSize: '14px',
    },
    colorbutton: {
        marginTop: '50px',
        color: 'white',
        marginBottom: '50px',
        backgroundColor: 'rgb(4,136,255)',
        '&:hover': {
            color: 'white',
            backgroundColor: 'rgb(4,136,255)'
        },
        fontSize: '14px',

    },
    width: {
        width: '100%',
        textAlign: 'right',
        fontSize: '14px',
    },
    rightmargin: {
        marginRight: '100px',
        fontSize: '14px',
    },
    indicator: {
        backgroundColor: 'blue',
        fontSize: '14px',
    },
    topRight:{
        position: "absolute",
        top: "10px",
        right: "10px",
    }
}));
function GeneralProfile(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }

    return (
        <div>
            <div className={classes.label}>
                SETTINGS
                </div>
            <Grid container spacing={0}>
                <Grid item xs={8}>
                    <div className={classes.row}>
                        <GenralProfileSettings setting={"Daily remind adding Expenses Income"} />
                        <div style={{ marginRight: '100px' }}>
                            <GeneralProfileCheckBox value={props.result.setting.settingType1} name="setting_settingType1" method={(event) => props.method(event)} /></div>
                    </div>
                    <div className={classes.row}>
                        <GenralProfileSettings setting={"Monthly/weekly summary"} />
                        <div className={classes.rightmargin}>
                            <GeneralProfileCheckBox value={props.result.setting.settingType2} name="setting_settingType2" method={(event) => props.method(event)} /></div>
                    </div>
                    <div className={classes.row}>
                        <GenralProfileSettings setting={"Use calculator to enter amount"} />
                        <div className={classes.rightmargin}>
                            <GeneralProfileCheckBox value={props.result.setting.settingType3} name="setting_settingType3" method={(event) => props.method(event)} /></div>
                    </div>

                    <div className={classes.row}>
                        <GenralProfileSettings setting={"Default time period"} />
                        <Frequency one="Monthly" two="Daily" three="Weekly" value={props.result.setting.settingType4} name="setting_settingType4" method={(event) => props.method(event)} />
                    </div>
                    <div className={classes.row}>
                        <GenralProfileSettings setting={"Default date of month starting "} />
                        <Frequency one="1" two="2" three="3" value={props.result.setting.settingType5} name="setting_settingType5" method={(event) => props.method(event)} />
                    </div>
                    <div className={classes.row}>
                        <GenralProfileSettings setting={"Remind me before the bill dues  "} />
                        <Frequency one="1 Day" two="2 Days" three="3 Days" value={props.result.setting.settingType6} name="setting_settingType6" method={(event) => props.method(event)} />
                    </div>
                </Grid>
            </Grid>

            <div className={classes.margin}>
                <Divider />
            </div>

            <Grid container spacing={0}>

                <Grid item xs={8}>
                    <div className={classes.label}>
                        NOTIFICATIONS
                           </div>
                    <div className={classes.row}>
                        <GenralProfileSettings setting={"Notify me when expenses exceeds 70%"} />
                        <div className={classes.rightmargin}>
                            <GeneralProfileCheckBox value={props.result.notification.notificationType1} name="notification_notificationType1" method={(event) => props.method(event)} /></div>
                    </div>
                    <div className={classes.row}>
                        <GenralProfileSettings setting={"When new bill is added"} />
                        <div className={classes.rightmargin}>
                            <GeneralProfileCheckBox value={props.result.notification.notificationType2} name="notification_notificationType2" method={(event) => props.method(event)} /></div>
                    </div>
                    <div className={classes.row}>
                        <GenralProfileSettings setting={"Amount debited/credited from bank account"} />
                        <div className={classes.rightmargin}>
                            <GeneralProfileCheckBox value={props.result.notification.notificationType3} name="notification_notificationType3" method={(event) => props.method(event)} /></div>
                    </div>

                    <div className={classes.row}>
                        <GenralProfileSettings setting={"Notify me when I am exceeding the goal period"} />
                        <div className={classes.rightmargin}>
                            <GeneralProfileCheckBox value={props.result.notification.notificationType4} name="notification_notificationType4" method={(event) => props.method(event)} /></div>
                    </div>
                    <div className={classes.row}>
                        <GenralProfileSettings setting={"Notify me when I reach my goal"} />
                        <div className={classes.rightmargin}>
                            <GeneralProfileCheckBox value={props.result.notification.notificationType5} name="notification_notificationType5" method={(event) => props.method(event)} /></div>
                    </div>
                    <div className={classes.row}>
                        <GenralProfileSettings setting={"Recurring expenses due "} />
                        <div className={classes.rightmargin}>
                            <GeneralProfileCheckBox value={props.result.notification.notificationType6} name="notification_notificationType6" method={(event) => props.method(event)} /></div>
                    </div>
                    <div className={classes.row}>
                        <GenralProfileSettings setting={"Manage uncategorized "} />
                        <div className={classes.rightmargin}>
                            <GeneralProfileCheckBox value={props.result.notification.notificationType7} name="notification_notificationType7" method={(event) => props.method(event)} /></div>
                    </div>
                </Grid>

                <Grid item xs={4}>
                    <div className={classes.labelmessage}>
                        MESSAGES
                           </div>
                    <Messages value="Email" name="message_emailMessages" label="Email" value={props.result.message.emailMessages} method={(event) => props.method(event)} />
                    <Messages value="Test messages" name="message_textMessages" label="Text message" value={props.result.message.textMessages} method={(event) => props.method(event)} />
                </Grid>
            </Grid>
            <div className={classes.width}>
                <Button variant="contained" classes={{ root: classes.colorbutton }} onClick={(event) => props.postToApi()}>Confirm changes</Button>
            </div>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={props.open}
                autoHideDuration={6000}
                onClose={(event,reason)=>props.handleClose(event,reason)}>
                <Alert onClose={(event,reason)=>props.handleClose(event,reason)} severity="success">
                    Changes Saved!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default GeneralProfile
