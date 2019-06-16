import React from 'react';
import { Link } from 'react-router-dom';

export function SelectionButton(props) {
  return (
    <Link to={"/game/" + props.option} className="btn btn-success">{props.option} players</Link>
  )
}
