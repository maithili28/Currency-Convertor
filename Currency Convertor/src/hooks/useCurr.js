import { useState ,useEffect}from "react"
function useCurr(currency){
    const[data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res)=>res.json())//convert into json file
    .then((res)=>setData(res[currency]))//get currency data as an array
    },[currency])
    console.log("data",data)
    return data;
}
export default useCurr