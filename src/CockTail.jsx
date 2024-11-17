import React, { useContext } from 'react';
import { StoreContext } from './context';
import { useQuery } from 'react-query';
import axios from 'axios';
import './index.css'
import { Link } from 'react-router-dom';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const CockTail = () => {
  const { searchItem } = useContext(StoreContext);

  const response = useQuery(
    ['images', searchItem],
    async () => {
      const results = await axios.get(`${url}${searchItem}`);
      return results.data;
    }
  );

  if (response.isLoading) return <div>Loading...</div>;
if (response.error) return <div>Error: {response.error.message}</div>;
  // Ensure `data.drinks` is defined
  const drinks = response.data?.drinks;
  if (!drinks) return <div>No drinks found.</div>;
  console.log(response.data)

  return (
    <div className='cocktails'>
      {drinks.map((item) => {
        const imgUrl = item?.strDrinkThumb;

        return (
          <div className='cocktail-cards' key={item.idDrink}>
            <img src={imgUrl} alt={item.strDrink} />
            <div className='cocktail-det'>
            <h1>{item.strDrink}</h1>
            <p>{item.strGlass}</p>
            <p className='cocktail-des'>{item.strAlcoholic}</p>
            <Link to={`/cocktail/${item.idDrink}`}><button className='item-button'>Details</button></Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CockTail;
