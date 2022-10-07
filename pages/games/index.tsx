import React, {useEffect, useState} from 'react'


const index = () => {
  const [data, setData] = useState([])
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
          <h1>{c.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default index