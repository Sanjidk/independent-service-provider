import { useEffect, useState } from "react";

const useServices = () =>{

  const [services, setSrevices] = useState([]);

  useEffect(()=>{
    fetch('services.json')
    .then(res=>res.json())
    .then(data=> setSrevices(data))
  },[])


  return [services, setSrevices];

}


export default useServices;