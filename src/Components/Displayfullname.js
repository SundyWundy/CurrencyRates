import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function Displayfullname({Currency, CurrencyValue}) {
    const [Fullname, setFullname] = useState([]);
    const [DisplayName, setDisplayName] = useState();
    const [getNameIndex, setgetNameIndex] = useState(0);

    useEffect(()=>{
    axios.get("./Common-Currency.json")
    .then(res =>{
      setFullname([...Object.keys(res.data)])
    })
    }, [])

    useEffect(()=>{
    axios.get("./Common-Currency.json")
    .then(res =>{
      let Nameindex = Object.keys(res.data)[getNameIndex]
      setDisplayName(res.data[Nameindex].name)
    })
  }, [Currency, DisplayName, getNameIndex])


    useEffect(()=>{
        getFullnameIndex()
    }, // eslint-disable-next-line
    [Currency, Fullname])

    const getFullnameIndex = () =>{
        let x = 0;
        for(x = 0; x <Fullname.length;x++){
            if(Currency === Fullname[x]){
                setgetNameIndex(x)
                x = Fullname.length
            }
        }
    }
    return (
        <div>
            {CurrencyValue} {DisplayName}
        </div>
    )
}
