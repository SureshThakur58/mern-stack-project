import React, { useState } from 'react'
import "./App.css";
import { Box, Button, Typography } from '@mui/material';


// ?useState => hooks => react function
// ? store such variables which has to be displayed

const Counter = () => {
  const [count, setCount] = useState(1);
  console.log(count);
  return (
    (
      <Box>
       <Typography variant="h3">Counter </Typography>
       <Typography variant="h4">{count}</Typography>
       <Button
       variant="contained"
       color='success'
       onClick={() =>
        {
          let newCount =count + 1;
          setCount(newCount);
        }
       }
       >
        Increase count
       </Button>
      </Box>
     )
  )
}

export default Counter