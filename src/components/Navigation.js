import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <IconButton style={{color: 'yellow'}} color="yellow" to={'/'} component={Link}><ArrowBackIcon/></IconButton>
    </div>
  );
}

export default Navigation;