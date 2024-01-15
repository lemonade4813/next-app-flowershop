'use client'


import Image from 'next/image'
import { useEffect } from 'react'


const flowerList = async () => {
  
  const response = await fetch(`https://flower.at.or.kr/api/returnData.api?
                                kind=f001&
                                serviceKey=FFA4DBD82C754CD29E5F7881DDA8F4D7&
                                baseDate=2024-01-15&
                                flowerGubn=1&
                                dataType=json&
                                countPerPage=40`, {cache : 'no-store'})
        const data = await response.json()

        console.log(data)
}




export default function Home() {

  useEffect(()=>{
    flowerList();

  },[])



  return (
   <h1>홈</h1>
  )
}
