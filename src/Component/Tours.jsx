import React from 'react';
import Card from './Card';

function Tours({ tours, removeTour }) {

  return (

    <div className='container'>
      <div>
        <h2 className='title'>Plan With Ambresh</h2>
      </div>

      <div className='cards'>
        {
          tours.map((tour) => (
            <Card key={tour.id} {...tour} removeTour={removeTour} /> 
          ))
        }
      </div>

    </div>
  );
}

export default Tours;

// ...tour -> spread operator used to cloning
// Map function are operating each elements
// Map function need to key
