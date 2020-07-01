import React from 'react';
import NavMenu from "./NavMenu"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={classes.root}>
            <AppBar color="secondary" position="static">
                <Toolbar>
                    <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon>
                            <NavMenu />
                        </MenuIcon>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Ken Williams
          </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}