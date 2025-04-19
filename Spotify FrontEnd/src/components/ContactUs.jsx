import React from 'react'
import Navbar from './Navbar'
import { Mail, Instagram, Linkedin, Twitter,Youtube } from 'lucide-react';

const ContactUs = () => {
    
  return (
    <>
    <Navbar/>
    <div className='flex items-center justify-center h-screen'>
        <div className="max-w-3xl bg-white rounded-2xl shadow-lg p-8 opacity-50 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-center text-gray-950 mb-6">Anurag Chackravaish</h2>
          <div className="flex justify-center gap-6 mt-6">
          {/* Mail */}
          <a href="mailto:anuragbabuchackravaish@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="w-7 h-7 text-gray-800 hover:text-blue-600 transition duration-200" />
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/anurag0957/?locale=ru&hl=am-et" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-7 h-7 text-gray-800 hover:text-pink-500 transition duration-200" />
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/anurag-chackravaish-254a6924a/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-7 h-7 text-gray-800 hover:text-blue-700 transition duration-200" />
          </a>
          {/* Twitter */}
<a href="https://x.com/Anurag32743400" target="_blank" rel="noopener noreferrer">
  <Twitter className="w-7 h-7 text-gray-800 hover:text-sky-500 transition duration-200" />
</a>

{/* YouTube */}
<a href="https://www.youtube.com/@anuragchackravaish" target="_blank" rel="noopener noreferrer">
  <Youtube className="w-7 h-7 text-gray-800 hover:text-red-600 transition duration-200" />
</a>
        </div>
        </div>
    </div>
    </>
  )
}

export default ContactUs
