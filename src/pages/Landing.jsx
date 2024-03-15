import React from 'react'
import { Link } from 'react-router-dom'
function Landing() {
  return (
    <>
    <div className='w-100 d-flex justify-content-center align-items-center' style={{height:'80vh'}}>
      <div className='row p-5'>
        <div className='col d-flex flex-column justify-content-center'>
          <h1>Media Player 2024</h1>
          <p>Explore media player for youtube videos upload and management.you can add and manage videos,categories and even check the watch History</p>
          <div>
            <Link to={'/dash'} className='btn btn-success'>Explore</Link>
          </div>
        </div>
        <div className="col">
          <img src="https://mauikit.org/wp-content/uploads/2021/08/clip.png" className='img-fluid' alt="img" />
        </div>

      </div>
    </div>
    <div className='mt-3 p-5'>
      <h2 className='text-center'>Features</h2>
      <div className='d-flex mt-2 flex-row justify-content-between'>
          <div className="card" style={{width:'18rem'}}>
          <img src="https://media4.giphy.com/avatars/iiiamselina/4wZDALyxb7hZ.gif" style={{height:'300px'}} class="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Upload Videos</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>  

        <div className="card" style={{width:'18rem'}}>
          <img src="https://i.gifer.com/U55Q.gif"  style={{height:'300px'}} class="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Watch Videos</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

        <div className="card" style={{width:'18rem'}}>
          <img src="https://i.gifer.com/RWmw.gif" style={{height:'300px'}} class="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">View History</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>
    <div className='mt-5 d-flex justify-content-between flex-row align-items-center p-5'>
      <div className="col">
        <h1>Simple, Fast and Secured</h1>
        <p style={{textAlign:'justify'}}> Media player 2024 is a platform for simple and faster youtube video uploading and management video watch history too where you get a simple video player interface with the app itself...</p>
      </div>
      <div className='col p-5'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/L0yEMl8PXnw?si=BAER-fRj0DAPHSCg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

    </div>
    
    
    </>
  )
}

export default Landing