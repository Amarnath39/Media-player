import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getVideos } from '../services/allApis'

function Videos(AddStatus) {
  const [allVideos,setallVideos]=useState([])
  const [delStatus,setDelStatus]=useState({})

  useEffect(()=>{
    getData()
  },[AddStatus,delStatus])

  const getData=async()=>{
    const res=await getVideos()
    // console.log(res.data)
    setallVideos(res.data)
    console.log(allVideos)
  }

  return (
    <div className='bg-light border border-3 p-5 row'>
      {
      allVideos?
      allVideos.map(item=>(
              <VideoCard video={item} setDelStatus={setDelStatus}/>
      ))
      :
      <h1>No videos</h1>
      }
    </div>

  )
      
}

export default Videos