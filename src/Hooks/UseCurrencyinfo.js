import {useEffect,useState} from 'react'


function UseCurrencyinfo(currency) {
    let [data, setData] = useState({});
    useEffect(()=>{
        async function fetchData() {
            let curntry = await fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`);
            let response = await curntry.json();
            // Use the response data here
            let maindata=response[currency]; 
            setData(maindata);
            
        }
        fetchData();

    }, [currency]);
    return data;
}


export default UseCurrencyinfo;