import React, { useState, useEffect } from 'react';

const NewSongForm = ({ addSong }) => {
  const [songName, setSongName] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    addSong(songName);
    setSongName('');
  }
  return (
    <form onSubmit={onSubmit}>
      <label>Song Name:</label>
      <input type="text" value={songName} required onChange={(e) => setSongName(e.target.value)}></input>
      <input type="submit" value="add song"></input>
    </form>
  );
}
 
export default NewSongForm;