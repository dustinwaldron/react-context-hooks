import React, { useState, useEffect } from 'react';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    { id: 1, name: 'Back in Black' },
    { id: 2, name: 'Free Bird' },
    { id: 3, name: 'Paradise City' }
  ]);
  const addSong = (songName) => {
    setSongs([ ...songs, { id: songs.length + 1, name: songName }])
  };
  const [age, setAge] = useState(20);
  useEffect(() => {
    console.log('songs updated!');
  }, [songs])
  useEffect(() => {
    console.log('age updated!');
  }, [age])
  const songList = songs.map(song => (<li key={song.id}>{song.name}</li>));
  return (
    <div className='song-list'>
      <ul>
        {songList}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to Age: {age}</button>
    </div>
  );
}
 
export default SongList;