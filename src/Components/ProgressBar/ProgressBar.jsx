import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { STRINGS } from '../../utils/Enums';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ minWidth: 35 }}>
        <Typography style={{fontFamily:STRINGS.FONTS.HELVITICA, fontSize:"14px", fontWeight:"700"}}>{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress  sx={{backgroundColor:"#E2E8F0", '& .MuiLinearProgress-bar': { backgroundColor: '#000000' }}} variant="determinate" {...props} />
      </Box>
      
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function ProgressBar(props) {
  const [progress, setProgress] = React.useState(props.percentage);
  console.log("percentage is ", progress)

 
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}