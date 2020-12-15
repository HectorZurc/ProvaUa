import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <image src='/images/img-home.jpg'/>
      <h1>STELLAR</h1>
      <p>Compositor e Cantor</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Saiba +
        </Button>

      </div>
    </div>
  );
}

export default HeroSection;
