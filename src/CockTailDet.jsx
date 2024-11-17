import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import './index.css'; // Assuming you have styles defined

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const CockTailDet = () => {
  const { id } = useParams(); // Get the id from the URL

  // Fetch cocktail details
  const { data, isLoading, error } = useQuery(['cocktailDetail', id], async () => {
    const response = await axios.get(`${url}${id}`);
    return response.data;
  });
console.log(    data)
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const cocktail = data?.drinks?.[0]; // Extract the first result
  if (!cocktail) return <div>No cocktail details found.</div>;

  // Render details
  return (
    <div>
       <Link to='/'> <button className='Back-home'>Back To Home</button></Link>
    <div className="cocktail-details">

      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <div>
      <p><strong>Name:</strong>{cocktail.strDrink}</p>
      <p><strong>Category:</strong> {cocktail.strCategory}</p>
      <p><strong>Glass:</strong> {cocktail.strGlass}</p>
      <p><strong>Type:</strong> {cocktail.strAlcoholic}</p>
      <p><strong>Instructions:</strong> {cocktail.strInstructions}</p>
      <p><strong>Ingredients:</strong>
      {cocktail.strIngredient1},{cocktail.strIngredient2},{cocktail.strIngredient3},
       {cocktail.strIngredient4},{cocktail.strIngredient5}</p>
</div>
    </div>
    </div>
  );
};

export default CockTailDet;
