import React from 'react';
import { Image } from 'react-bootstrap';

export function Card(props) {
  return (
    <Image
      src={props.card.image} 
      className="img-responsive" 
      alt={props.card.value.toLowerCase()} 
      onClick={() => props.handleClick(props)} />
  )
}
