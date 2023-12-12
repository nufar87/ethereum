import { Grid, InputAdornment, TextField } from '@mui/material'
import React from 'react'

const InputAmount = ({currency, currencyType, value, setValue}) => {

  return (
    <Grid item xs={6} md={6} lg={6}>
        <TextField
            label={currency}
            value={value}
            onChange={(e)=> {
                setValue(e.target.value)   
            }}
            fullWidth
            size='small'
            InputProps={{
                type: "number",
                startAdornment: <InputAdornment position="start">{currencyType}</InputAdornment>
            }}
            sx={{
                color:'rgba(240,248,255, 0.6)',
                input: { color: '#ffffff' },
                label: { color: 'rgba(240,248,255, 0.5)' },
               " & .css-1pnmrwp-MuiTypography-root": {color: '#ffffff' },
               "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {borderColor: 'rgba(240,248,255, 0.2)' },
           
                //override input type number arrows
                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                    display: "none"
                },
                "& input[type=number]": {
                    MozAppearance: "textfield",
                },
                //override input hover and focus 
                "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                        borderColor: "rgba(240,248,255, 0.2)"
                    },
                   
                    "&:hover fieldset": {
                        borderColor: "rgba(240,248,255, 0.2)"
                    }
                },
                //override label focus color 
                "& label.Mui-focused": {
                    color: 'rgba(240,248,255, 0.5)'
                },
            }}
        />
    </Grid>
  )
}

export default InputAmount