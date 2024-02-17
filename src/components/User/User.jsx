import React from 'react';
import './User.css'
import Events from './Events';
import Nav from './Nav';
import Sidebar from './Sidebar';
import Calendar from './Calendar';
import Attendance from './Attendance';
import Payments from './Payments';

export default function User() {
  return (
    <>
      <Nav />
      <div class="p-4 sm:ml-64">
        <div class="p-4 mt-4">
          {/* <Sidebar /> */}
          <div className="flex flex-wrap justify-center">
            {/* Card 1 */}
            {/* All events */}
            <div className="w-full sm:w-1/2 lg:w-1/2 p-4">
              <Events />
            </div>

            {/* Card 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/2 p-4">
              <Calendar />
            </div>

            {/* Card 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/2 p-4">
              <Attendance />
            </div>

            {/* Card 4 */}
            <div className="w-full sm:w-1/2 lg:w-1/2 p-4">
              <Payments />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
