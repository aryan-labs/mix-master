import React from 'react';
import { useParams } from 'react-router-dom';
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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const cocktail = data?.drinks?.[0]; // Extract the first result
  if (!cocktail) return <div>No cocktail details found.</div>;

  // Render details
  return (
    <div className="cocktail-details">
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <h1>{cocktail.strDrink}</h1>
      <p><strong>Category:</strong> {cocktail.strCategory}</p>
      <p><strong>Glass:</strong> {cocktail.strGlass}</p>
      <p><strong>Type:</strong> {cocktail.strAlcoholic}</p>
      <p><strong>Instructions:</strong> {cocktail.strInstructions}</p>
      <h3>Ingredients:</h3>
      <ul>
        {Array.from({ length: 15 }, (_, index) => {
          const ingredient = cocktail[`strIngredient${index + 1}`];
          const measure = cocktail[`strMeasure${index + 1}`];
          return (
            ingredient && (
              <li key={index}>
                {ingredient} {measure ? `- ${measure}` : ''}
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

export default CockTailDet;
