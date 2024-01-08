
import React from 'react';
import './Spinner.css';

export default function Spinner() {
  return (
    <div className='fixed inset-0 flex justify-center items-center gap-y-10'>
      <div className='loader'></div>
    </div>
  );
}
