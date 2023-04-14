import { Box, Button, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'

export const Form = () => {
    const [text, setText] = useState('')

    return (
        <Paper sx={{ padding: "1rem" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <TextField id="outlined-basic" label="Task" variant="outlined" fullWidth onChange={(e) => setText(e.target.value)}/>
                <Button variant="text" onClick={()=> console.log(text)}>ADD</Button>
            </Box>
        </Paper>
    )
}