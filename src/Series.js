import React ,{useEffect, useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'

const Series = () => {
    const [seriesName , setSeriesName] = useState([])
    return(
    <>
    <Header name = 'Series'/>
    <div>
        useEffect(()=>{
            axios.get('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
            .then(response => {
                
            })
        })
    </div>
    <Footer/>
</>
    )}
    export default Series