import React from 'react';
import Style from './Home.module.scss';
import gremlins from '../../assets/gremlins.png';
import {Box} from '@material-ui/core';


//apply flex direction utility only at a specific breakpoint, use responsive object notation. flexDirection={{ xs: 'column', md: 'row' }} to an element would apply the flexDirection="column" by default and the flexDirection="row" utility at medium screen sizes and above.

//the minimum height of an element is 100vh minus the height of the header and footer. This ensures that the footer is always at the bottom of the page, even if the content is too short to fill the entire viewport.

//using gradients for text
// linear-gradient(to right, rgb(0, 0, 0), rgb(41, 40, 40));


export default function Home() {
    return (
        <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'} justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
            <Box component={'img'} src={gremlins} className={Style.gremlins} alt={'gremlins'} style={{background: gremlins.gradient}}/>
            
        </Box>
   )
}