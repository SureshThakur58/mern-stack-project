import { Box, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const DisplayName = () => {
    const [userName, setUserName] = useState("Sujata");
  return (
      <Box>
        <Typography variant='h3'>Display your name</Typography>
        <Typography variant='h4'>{userName}</Typography>
        <TextField
        label='Name'
        onChange={(event) => {
            setUserName(event.target.value);
        }}
        ></TextField>
      </Box>
  )
}

export default DisplayName