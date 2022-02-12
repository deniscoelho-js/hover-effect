import React from 'react';
import { useState } from 'react';
import './App.scss';
import data from './data';

function App() {

  const [person, setPerson] = useState(data)

  return (
    <section>
      
      {
        person.map((item, index)=>(
          <div className='box' key={index}>
            <div className="list">
              <div className='imgBox' >
                  <img src={item.img}  />
              </div>
              <div className='content' >
                <h4>{item.name}</h4>
                <p>{item.profession}</p>
              </div>
           </div>
          </div>
        ))
      }
    </section>
  );
}

export default App;
