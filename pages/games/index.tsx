import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import { Company } from '../../components/Interface'


const index = () => {
  const [data, setData] = useState<Company[]>([])
  const fetchData = async ()=>{
    const res = await fetch('http://localhost:3000/api/games')
    const rows = await res.json()
    setData(rows)
  }
  useEffect(()=>{
    fetchData()
  }, [])
  return (
    <div>
      {data.map(c=>(
        <div key={c.id}>
          <Link href={`/games/${c.id}`}><h1>{c.name}</h1></Link>
        </div>
      ))}
    </div>
  )
}

export default index