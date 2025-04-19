import {React,useContext,useState}from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { PlayerContext } from '../context/PlayerContext'
import axios from 'axios'
const Sidebar = () => {

  const navigate = useNavigate()
  const {track,token,setToken} = useContext(PlayerContext)

  const AddToPlaylist = async () => {

    try {
      if (!track || !track._id) {
        console.warn("No track selected");
        return;
      }
  
      const res = await axios.post('http://localhost:4000/api/playlist/add', 
        {
           itemId: track._id 
        },
        {
          headers:{
            token:token
          },
        }
      );
  
      console.log(res.data.message);
    } catch (err) {
      console.error("Failed to add to playlist", err);
    }
  };

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
          <div onClick={()=>navigate("/")} className='flex items-center gap-3 pl-8 cursor-pointer'>
            <img className='w-6' src={assets.home_icon} alt="" />
            <p className='font-bold'>Home</p>
          </div>
          <div className='flex items-center gap-3 pl-8 cursor-pointer'>
            <img className='w-6' src={assets.search_icon} alt="" />
            <p className='font-bold'>Search</p>
          </div>
        </div>
        <div className='bg-[#121212] h-[85%] rounded'>
          <div className='p-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <img className='w-8' src={assets.stack_icon} alt="" />
              <p className='font-semibold'>Your Library</p>
            </div>
            <div className='flex items-center gap-3'>
              <img onClick={()=>navigate("/Playlist")} className='w-5' src={assets.arrow_icon} alt="" />
              <img className='w-5' src={assets.plus_icon} alt="" />
            </div>
          </div>
          {token?<div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
            <h1>Add this song in your Playlist</h1>
            <button 
      onClick={AddToPlaylist}
      className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>
      Add to Playlist
    </button>
          </div>
          
          :
          <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
            <h1>Create your first playlist</h1>
            <p className='font-light'>It's easy, we'll help you</p>
            <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create playlist</button>
          </div>}


          {token?<div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
            <h1>Remove this song from your playlist</h1>
            <button 
      onClick={AddToPlaylist}
      className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>
      Remove Playlist
    </button>
          </div>
          :
          <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
            <h1>Let's find some podcasts to follow</h1>
            <p className='font-light'>We'll keep you updated on new episodes</p>
            <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse podcasts</button>
          </div>
          }
        </div>
    </div>
  )
}

export default Sidebar
