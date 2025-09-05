import {AppBar, Link, Typography} from '@mui/material';
import {Link as RouterLink} from 'react-router';

export default function DefaultNavbar(){
    return(
        <AppBar position="absolute" sx={{height: 50}}>
            <Link
            align="left"
            component={RouterLink}
            to="/">
                <Typography position="absolute">
                    CampusConnect
                </Typography>
            </Link>
                <Link color="secondary" align="right" component={RouterLink} to="/login">
                Sign Up Today
                </Link>
        </AppBar>
    );
}