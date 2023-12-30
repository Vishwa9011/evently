import React from 'react';
import { HashLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className='fixed h-screen w-full '>
      <h1 className='text-4xl'>Loading...</h1>
      <HashLoader color="#36d7b7" />
    </div>
  );
}

export default Loading;