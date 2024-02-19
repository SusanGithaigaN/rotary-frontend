import React, { useState } from 'react';
import Events from './Events';
import Nav from './Nav';
import Calendar from './Calendar';
import Attendance from './Attendance';
import Payments from './Payments';

export default function User() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Nav user={user} setUser={setUser} />
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-4">
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/2 p-4">
              <Events user={user} setUser={setUser} /> {/* Pass user state as a prop */}
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/2 p-4">
              <Calendar user={user} setUser={setUser}/>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/2 p-4">
              <Attendance user={user} setUser={setUser} /> {/* Pass user state as a prop */}
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/2 p-4">
              <Payments />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
