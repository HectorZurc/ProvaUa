import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { useState } from 'react'
import MyTable from '../components/MyTable'
import listmusicas from '../data/musicas.json'

function Cards() {
  return (
    <div className='cards'>
      <h1>Lista de Informações</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
