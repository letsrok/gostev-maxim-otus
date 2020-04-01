import React from 'react';
import SearchCities from '../components/searchCities';
import ResoultCity from '../components/resoultCity';
import FavoriteCities from '../components/favoriteCities'



export function MainPage ()  {
  return (
    <>
      <SearchCities/>
      <ResoultCity/>
      <FavoriteCities/>
    </>
    
   )
}