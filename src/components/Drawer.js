import React from 'react';
import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { Route, Link, Switch ,Redirect} from 'react-router-dom'
import AppBar from './AppBar'
import CenteredGrid from './CenteredGrid'
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import ImportExportOutlinedIcon from '@material-ui/icons/ImportExportOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import TrackChangesOutlinedIcon from '@material-ui/icons/TrackChangesOutlined';
import Brand from '../atoms/Brand'
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
   
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        padding: '0px',
        marginTop: '65px',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },

    drawerClose: {
        padding: '0px',
        marginTop: '65px',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    active: {
        color: 'blue',
        fontWeight: 700,
    },

    a: {
        '&:hover': {
            color: 'black',

        },
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
    dividerColor: {
        color: 'blue',
        backgroundColor: 'blue',
        marginRight: '16px',
        width: '3px',
        marginLeft: '-12px'
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
       height:'20px',
    },
    content: {
        flexGrow: 1,
        marginLeft: '110px',
        marginRight: '30px',
    },
    listclass: { paddingTop: '0px' },
}));
export default function MiniDrawer() {
   
    const [selected, setSelected] = React.useState(2);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const selectedFun = (x) => {
        setSelected(x);
    }
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <CssBaseline />
            <AppBar><Brand /></AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <Divider />
                <div onMouseOverCapture={handleDrawerOpen} onMouseOutCapture={handleDrawerClose}>
                    <List className={classes.listclass} >
                        <Link to="/dashboard/home" className={classes.linksclass} onClick={() => { selectedFun(2) }}  >
                            <ListItem selected={(selected >> 1) & 1} classes={{ selected: classes.active }} button key="Home">
                                <Divider classes={{ root: classes.dividerColor }} flexItem={(selected >> 1) & 1} orientation="vertical" />
                                <ListItemIcon><HomeOutlinedIcon /></ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItem>
                            <Divider />
                        </Link>
                        <Link to="/dashboard/wallet" className={classes.linksclass} onClick={() => { selectedFun(4) }}>
                            <ListItem selected={(selected >> 2) & 1} classes={{ selected: classes.active }} button key="wallet">
                                <Divider classes={{ root: classes.dividerColor }} flexItem={(selected >> 2) & 1} orientation="vertical" />
                                <ListItemIcon><AccountBalanceWalletOutlinedIcon /></ListItemIcon>
                                <ListItemText primary="Wallet" />
                            </ListItem>
                            <Divider />
                        </Link>
                        <Link to="/dashboard/transactions" className={classes.linksclass} onClick={() => { selectedFun(8) }}>
                            <ListItem selected={(selected >> 3) & 1} classes={{ selected: classes.active }} button key="Transactions">
                                <Divider classes={{ root: classes.dividerColor }} flexItem={(selected >> 3) & 1} orientation="vertical" />
                                <ListItemIcon><ImportExportOutlinedIcon /></ListItemIcon>
                                <ListItemText primary="Transactions" />
                            </ListItem>
                            <Divider />
                        </Link>
                        <Link to="/dashboard/bank" className={classes.linksclass} onClick={() => { selectedFun(16) }} >
                            <ListItem classes={{ selected: classes.active }} selected={(selected >> 4) & 1} button key="Bank">
                                <Divider classes={{ root: classes.dividerColor }} flexItem={(selected >> 4) & 1} orientation="vertical" />
                                <ListItemIcon><AccountBalanceOutlinedIcon /></ListItemIcon>
                                <ListItemText primary="Bank" />
                            </ListItem>
                            <Divider />
                        </Link>
                        <Link to="/dashboard/track" className={classes.linksclass} onClick={() => { selectedFun(32) }} >
                            <ListItem classes={{ selected: classes.active }} selected={(selected >> 5) & 1} button key="Track">
                                <Divider classes={{ root: classes.dividerColor }} flexItem={(selected >> 5) & 1} orientation="vertical" />
                                <ListItemIcon><TrackChangesOutlinedIcon /></ListItemIcon>
                                <ListItemText primary="Track" />
                            </ListItem>
                            <Divider />
                        </Link>
                        <Link to="/dashboard/satistics" className={classes.linksclass} onClick={() => { selectedFun(64) }} >
                            <ListItem classes={{ selected: classes.active }} selected={(selected >> 6) & 1} button key="/satistics">
                                <Divider classes={{ root: classes.dividerColor }} flexItem={(selected >> 6) & 1} orientation="vertical" />
                                <ListItemIcon><BarChartOutlinedIcon /></ListItemIcon>
                                <ListItemText primary="Statistics" />
                            </ListItem>
                            <Divider />
                        </Link>
                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Redirect to="/dashboard/home"/>
                <Switch>
                    <Route path="/dashboard/myaccount"><h1>Welcome to my account</h1></Route>
                    <Route path="/dashboard/profile"><h1>Welcome to my Profile</h1></Route>
                    <Route path="/dashboard/home"><CenteredGrid /></Route>
                    <Route path="/dashboard/satistics"><h1>Welcome to statistics</h1></Route>
                    <Route path="/dashboard/bank"><h1>Welcome to bank account</h1></Route>
                    <Route path="/dashboard/transactions"><h1>Welcome to bank transactions</h1></Route>
                    <Route path="/dashboard/track"><h1>Welcome to track</h1></Route>
                    <Route path="/dashboard/wallet"><h1>Welcome to wallet</h1></Route>
                    <Route path="/profile"><h1>Welcome to Profile</h1></Route>
                </Switch>
             
            </main>
        </div>
    );
}
