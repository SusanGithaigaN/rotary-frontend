import React from 'react';
import './User.css'
import Events from './Events';

export default function User() {
  return (
    <div className="flex flex-wrap justify-center">
      {/* Card 1 */}
      {/* All events */}
      <div className="w-full sm:w-1/2 lg:w-1/2 p-4">
        {/* <div className="bg-white rounded-lg shadow-2xl p-6"> */}
          <Events />
        {/* </div> */}
      </div>

      {/* Card 2 */}
      <div className="w-full sm:w-1/2 lg:w-1/2 p-4">
        <div className="bg-white rounded-lg shadow-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Card 2</h2>
          <p>This is the content of card 2.</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-full sm:w-1/2 lg:w-1/2 p-4">
        <div className="bg-white rounded-lg shadow-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Card 3</h2>
          <p>This is the content of card 3.</p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="w-full sm:w-1/2 lg:w-1/2 p-4">
        <div className="bg-white rounded-lg shadow-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Card 4</h2>
          <p>This is the content of card 4.</p>
        </div>
      </div>
    </div>
  );
}
