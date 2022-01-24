import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import './styles.scss'

const CharacterId = (props) => {
   const characterId = props.match.params.id.substring(1);
   const [character, SetCharacter] = useState([]);
   const [episode, SetEpisode] = useState([]);
   const [location, SetLocation] = useState([])
   const api = 'https://rickandmortyapi.com/api/character';
   const history = useHistory()

   useEffect(() => {
      fetchData();
   }, []);

   const goBack = () => {
      history.goBack();
   }

   const fetchData = async () => {
      const data = await fetch(api + `/${characterId}`);
      const dataCharacter = await data.json();
      SetCharacter(dataCharacter);
      SetLocation(dataCharacter.location);
      SetEpisode(dataCharacter.episode);
   };

   return (
      <section className='characterId'>
         <button onClick={goBack} className='characterId-button-back'>Back</button>
         <section className='characterId-content'>
            <img
               className='characterId-img'
               src={character.image}
               alt={character.name}
            />
            <h2 className='characterId-header'>{character.name}</h2>
            <ul className='characterId-info'>
               <li className='characterId-item'>Species: {character.species}</li>
               <li className='characterId-item'>Gender: {character.gender}</li>
               <li className='characterId-item'>Location: {location.name}</li>
               <li className='characterId-item'>Status: {character.status}</li>
               <li className='characterId-item'>Created: {character.created}</li>
            </ul>
            <section>
               <h3 className='characterId-header'>Episode</h3>
               <ul className='characterId-episodes'>
                  {episode.map((item) =>
                  (
                     <li key={item.substring(40)}
                        className='characterId-episodes-item'>
                        Episode: {item.substring(40)}
                     </li>
                  )
                  )}
               </ul>
            </section>
         </section>
      </section>
   )
}

export default CharacterId