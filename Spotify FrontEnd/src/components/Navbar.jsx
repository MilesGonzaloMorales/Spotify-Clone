import React,{useContext} from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { PlayerContext } from '../context/PlayerContext'

const Navbar = () => {

  const navigate = useNavigate()
  const {token,setToken} = useContext(PlayerContext)

  return (
    <>
    {/* THIS IS NAVBAR */}
    <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
            <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="arrowLeft image" />
            <img onClick={()=>navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="arrowRight image" />
        </div>
        <div className='flex items-center gap-4'>
          <p onClick={() => navigate("/")} className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Home</p>
          <p onClick={() => navigate("/Contact")} className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Contact Me</p>
          <p onClick={() => navigate("/Signup")} className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Sign Up</p>
          <p onClick={() => navigate("/Login")} className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Log In</p>
          {token?<p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>A</p>
          :<p className='bg-yellow-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>B</p>}
        </div>
    </div>
    <div className='flex items-center gap-2 mt-4'>
      <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
      <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
      <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
    </div>
    </>
  )
}

export default Navbar
