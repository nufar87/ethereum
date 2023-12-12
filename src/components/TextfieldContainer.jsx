import {Box,TextField} from '@mui/material';

const TextfieldContainer = ({currency, currencyRate}) => {
  return (
    <Box   sx={{maxWidth: '100%',}}>
        <div>
            <TextField className='text-field' fullWidth
                id="read-only-input"
                label={currency}
                value={currencyRate}

                InputLabelProps={{
                    style: { color:'rgba(240,248,255, 0.6)' },
                    type: 'number',
                }}
                size='small'
                style={{backgroundColor: 'transparent' }}
                disabled
                sx={{
                    "& .MuiInputBase-root.Mui-disabled": {
                    "& > fieldset": {
                    borderColor: "rgba(240,248,255, 0.2)", borderStyle: 'solid',borderRadius: '4px'
                    }
                    },
                    "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#ffffff",
                    },
                }}
            />
        </div>
    </Box>
  )
}

export default TextfieldContainer;
