import * as React from 'react';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar.jsx';
import Toolbar from '../components/Toolbar.jsx';
import Logo from '../../assets/IMAGES FOR D3 WEBSITE/DEEP DATA DETECTIVES (D3) INITIATIVE LOGO_REVISED 02052023.png';
import Box from "@mui/material/Box";

// const rightLink = {
//     fontSize: 16, color: 'common.white', ml: 3,
// };

function AppAppBar() {
    return (<div>
        <AppBar position="fixed">
            <Toolbar>
                <Box marginX={2}>
                    <img src={Logo} alt="logo" width="60" height="60"/>
                </Box>
                <Link
                    variant="h6"
                    underline="none"
                    color="inherit"
                    href="/"
                    sx={{fontSize: 24}}
                >
                    {'DEEP DATA DETECTIVES (D3)'}
                </Link>
                {/*<Box sx={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>*/}
                {/*    <Link*/}
                {/*        color="inherit"*/}
                {/*        variant="h6"*/}
                {/*        underline="none"*/}
                {/*        href="/premium-themes/onepirate/sign-in/"*/}
                {/*        sx={rightLink}*/}
                {/*    >*/}
                {/*        {'Sign In'}*/}
                {/*    </Link>*/}
                {/*    <Link*/}
                {/*        variant="h6"*/}
                {/*        underline="none"*/}
                {/*        href="/premium-themes/onepirate/sign-up/"*/}
                {/*        sx={{...rightLink, color: 'secondary.main'}}*/}
                {/*    >*/}
                {/*        {'Sign Up'}*/}
                {/*    </Link>*/}
                {/*</Box>*/}
            </Toolbar>
        </AppBar>
        <Toolbar/>
    </div>);
}

export default AppAppBar;
