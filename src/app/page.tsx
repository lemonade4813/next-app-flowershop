'use client'


import Image from 'next/image'
import { useEffect } from 'react'







export default function Home() {


  const flowerList = async () => {
  
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://flower.at.or.kr/api/returnData.api?kind=f001&serviceKey=FFA4DBD82C754CD29E5F7881DDA8F4D7&baseDate=2024-01-15&flowerGubn=1&dataType=json&countPerPage=40', 
    { method: 'GET',
      headers : {
        'Origin' : 'http://192.168.45.127',
        'Cache-Control': 'no-store'
      }
    });
          
    
    console.log(response)

    const data = await response.json()

          console.log(data)
          
  }



  useEffect(()=>{
    flowerList();

  },[])



  return (
   <h1>홈</h1>
  )
}
