import React from 'react'
import { Link } from 'react-router-dom'

function Foooter() {
  return (
    <>
        <div className='w-100 bg-light d-flex flex-column justify-content-center  p-5'>
            <div className='row '>
                <div className='col'>
                    <h4>Media player 2024</h4>
                    <p style={{textAlign:'justify'}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a
                         typeface without relying on meaningful content
                        . Lorem ipsum may be used as a placeholder before the final copy is available.</p>
                </div>
                <div className='col'>
                    <h4>Links</h4>
                    {/* <a href="/">Landing</a> <br /> */}
                    <Link to={'/'} style={{color:'black',textDecoration:'none'}}>Landing</Link> <br />
                    {/* <a href="/dash">DashBoard</a> <br /> */}
                    <Link to={'/dash'} style={{color:'black',textDecoration:'none'}}>Dashboard</Link> <br />
                    {/* <a href="/his">History</a> */}
                    <Link to={'/his'} style={{color:'black',textDecoration:'none'}}>History</Link>
                </div>
                <div className='col'>
                    <h4>References</h4>
                    <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target='_blank' style={{color:'black', textDecoration:'none'}}>Bootstrap</a> <br />
                    <a href="https://react-bootstrap.netlify.app/" target='_blank' style={{color:'black',textDecoration:'none'}}>React-Bootstrap</a> <br />
                    <a href="https://react.dev/" target='_blank' style={{color:'black',textDecoration:'none'}}>React </a>
                </div>
                <div className='text-center'>
                    <p style={{color:'#b5af9e'}}>&copy; Media player</p>
                </div>

            </div>

        </div>

    </>
    
  )
}

export default Foooter