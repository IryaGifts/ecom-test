// AnnouncementBar.jsx
import React from 'react';

const AnnouncementBar = ({ announcements }) => {
  return (
    <div className="bg-blue-700 text-white py-2 px-5 flex">
      <marquee behavior="scroll" direction="left">
        {announcements.map((announcement, index) => (
          <span key={index} className="mr-4">{announcement}</span>
        ))}
      </marquee>
      <span>
        <ul className='h-5 flex gap-7 px-9'>
          <li><a className='inline-block text-sm' href="#">LOGIN/SIGNUP</a></li>
          <li><a className='inline-block text-sm' href="#">TRACK </a></li>
          <li><a className='inline-block text-sm' href="#">HELP</a></li>
        </ul>
      </span>
      
    </div>
  );
};

export default AnnouncementBar;
