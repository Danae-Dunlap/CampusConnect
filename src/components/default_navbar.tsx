import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import {Link as RouterLink} from 'react-router';

export default function DefaultNavbar(){
    return(
        <AppBar position="absolute" sx={{height: 50}}>
            <Container>
                <Typography position="absolute">
                    CampusConnect
                </Typography>
            </Container>
                <Link color="secondary" align="right" component={RouterLink} to="/login">
                Sign Up Today
                </Link>
        </AppBar>
    );
}