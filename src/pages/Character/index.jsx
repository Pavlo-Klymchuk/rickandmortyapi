import React, { useEffect, useState } from 'react'
import './styles.scss'
import Card from '../../components/Card'
import Button from '../../components/Button'

const Character = () => {
   const [err, SetErr] = useState(false);
   const [character, SetCharacter] = useState([]);
   const [page, SetPage] = useState(1);
   const [maxPage, SetMaxPage] = useState("");
   const [loading, setLoading] = useState(false);
   const api = 'https://rickandmortyapi.com/api/character';

   useEffect(() => {
      fetchData();
   }, [page]);

   const fetchData = async () => {
      setLoading(true);
      try {
         const data = await fetch(api + `/?page=${page}`);
         const dataCaracter = await data.json();
         SetMaxPage(dataCaracter.info.pages)
         SetCharacter(character.concat(dataCaracter.results));
         setLoading(false);
      } catch (err) {
         SetErr(err);
         setLoading(false);
      }
   }

   const nextPage = () => {
      SetPage(page + 1);
   }

   return (
      <div className='main-character'>
         <section className='character-container'>
            {character.map((item) => (
               <Card
                  key={item.id}
                  cardImg={item.image}
                  name={item.name}
                  status={item.status}
                  id={item.id}
               />
            ))}
         </section>
         {page === maxPage || loading === true || err === true ? (
            " "
         ) : (
            <Button btnText='More' evt={nextPage} />
         )}

      </div>
   )
}

export default Character