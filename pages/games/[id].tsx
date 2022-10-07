import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { Games } from '../../components/Interface'

interface Data {
  rows: Games[]
}

const id:React.FC<Data> = ({rows}) => {
  return (
    <div>
      {rows.map(game=>(
        <div key={game.id}>
          <h1>{game.name}</h1>
        </div>
      ))}
    </div>
  )
}

export const getServerSideProps:GetServerSideProps = async ({params})=>{
  const res = await fetch('http://localhost:3000/api/games/' + params?.id)
  const rows = await res.json()
  return {
    props: {rows}
  }
}

export default id