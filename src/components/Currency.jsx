import { useEffect, useState } from "react";
import {Grid} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import InputAmount from "./InputAmount";

function Currency() {
    const [data, setData] = useState([])
    const [rate, setRate] = useState('')
    const [diff, setDiff] = useState('')
    const [ethereum, setEthereum] = useState(1)
    const [dollar, setDollar] = useState()

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
        setRate(currRate)
        const calculatedDiff = ((oldRate/currRate -1)*100).toFixed(2)
        setDiff(calculatedDiff)
    }, [data])

    useEffect(() => {
        if (ethereum && ethereum>0) setDollar((ethereum*rate).toFixed(2)) 
    }, [rate, ethereum])

    useEffect(() => {
        const oneDollar = 1/rate
        if (dollar && dollar>0) 
        setEthereum((dollar*oneDollar).toFixed(3)) 
    }, [rate, dollar])

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
                <h1>{`$${Math.abs(rate).toFixed(2)}`}</h1>
                {setArrow()}
           </section>
           <h3>ETH to USD Convertor</h3>
            <Grid container spacing={0}>
                <InputAmount currency ={'Ethereum'} currencyType={'ETH'} defaultValue = {1}  value={ethereum} setValue={setEthereum} />
                <InputAmount currency ={'Dollar'} currencyType={'$'} defaultValue = {rate} value={dollar} setValue={setDollar}/>
            </Grid>
            </div> : null}
        </div>
    )
}

export default Currency;