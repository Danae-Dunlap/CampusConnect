import 'react'
import {AppBar, Link, Typography, Avatar} from '@mui/material'; 
import {Link as RouterLink} from 'react-router'; 

export default function Navbar() {
    return(<>
    <AppBar>
        <Link component={RouterLink} to="/home">
        //Replace with messages
            <Typography>
            Home
            </Typography>
        </Link>
        <Link component={RouterLink} to="/dashboard">
            <Typography>
            Dashboard
            </Typography>
        </Link>
        <Link component={RouterLink} to="/profile">
            <Typography>
            Profile
            </Typography>
        </Link>

        //Figure out a way to add user specific avatar
        <Avatar></Avatar>
    </AppBar>
    
    </>)
}