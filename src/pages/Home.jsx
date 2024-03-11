import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Sidebar from '../components/Sidebar/Sidebar'
import NewsFeed from '../components/Newsfeed/NewsFeed'
import Rightbar from '../components/Rightbar/Rightbar'

const Home = () => {
  return (<div>
    <NavBar/>
    <div className='flex'>
    <Sidebar/>
    <NewsFeed/>
    <Rightbar/>
    </div>
    </div>
  )
}

export default Home