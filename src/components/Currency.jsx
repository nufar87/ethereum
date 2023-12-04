import { useEffect, useState } from "react";
import TextfieldContainer from "./TextfieldContainer";
import {Grid} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';


function Currency() {
    const [data, setData] = useState([])
    const [diff, setDiff] = useState('')

    useEffect(()=>{
        const fetchData = async () => {
            const data = await fetch('https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=1%0A');
            const json = await data.json();
            setData(json.prices)
          }
          fetchData().catch(console.error)
    }, [])

    useEffect(() => {
        if (data.length===0) return;
        const oldRate = data[0][1]
        const currRate = data[data.length-1][1]
        const calculatedDiff = ((oldRate/currRate -1)*100).toFixed(2)
        setDiff(calculatedDiff)
    }, [data])

    const setArrow = ()=> {
        const color = diff>0 ? 'green' : 'red';
        const arrow = diff>0 ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>
        return(
            <span className={color}>
                <Grid container direction="row" alignItems="center">
                    <Grid item alignSelf="baseline">
                        <span>{arrow}</span>
                    </Grid>
                    <Grid item>
                        {`${Math.abs(diff)}% (1d)`}
                    </Grid>
                </Grid>
            </span>               
        )
    }

    return (
        <div className='container'>
          {  data.length >0 ? <div>
           <section className='current-rate'>
                <h1>{`$${data[0][1].toFixed(2)}`}</h1>
                {setArrow()}
           </section>
           <h3>ETH to USD Convertor</h3>
            <Grid container spacing={0}>
                <Grid item xs={6} md={6} lg={6}>
                    <TextfieldContainer currency ={'Ethereum'} currencyRate= {'ETH 1'}/>
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                    <TextfieldContainer currency ={'Dollar'} currencyRate={`$${data[0][1].toFixed(2)}`}/>
                </Grid>
            </Grid>
            </div> : null}
        </div>
    )
}

export default Currency;