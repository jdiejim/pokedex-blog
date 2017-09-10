import React from 'react';
import './styles/DetailView.css';

const DetailView = () => {
  return (
    <section className="detail-view">
      <div className='sprite-image'></div>
      <div className='data-wrapper'>
        <h1 className='data-name'></h1>
        <p className='data-char'>id:</p>
        <p className='data-char'>Type:</p>
      </div>
    </section>
  )
}

export default DetailView;