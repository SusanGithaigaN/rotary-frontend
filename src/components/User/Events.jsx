import React, { useState, useEffect } from 'react';

export default function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:3000/events')
            .then(response => response.json())
            .then(data => setEvents(data))
            .catch(error => console.error('Error fetching events:', error));
    }, []);

    return (
        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none">Upcoming Events</h5>
                <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                    View all
                </a>
            </div>
            <div className="flow-root">
                {events.length > 0 ? (
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        {events.map(event => (
                            <li key={event.id} className="py-3 sm:py-4">
                                <div className="flex items-center">
                                    {/* Assuming the event creator's image is not provided in the response */}
                                    <div className="flex-shrink-0">
                                        <img className="w-8 h-8 rounded-full" src="https://res.cloudinary.com/dfczhaomn/image/upload/v1708049373/f189e2201c544ce1b82ad91b67dc1cfd_mybesq.jpg" alt="Neil image" />
                                    </div>
                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-sm font-medium truncate">
                                            {event.name}
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            {event.location} - {new Date(event.datetime).toLocaleString()}
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            {event.description}
                                        </p>
                                    </div>
                                    {/* You need to fetch the price from somewhere, it's not provided in the event data */}
                                    <div className="inline-flex items-center font-bold text-red-600 text-xl">
                                        $320
                                    </div>
                                </div>
                            </li> 
                        ))}
                    </ul>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}
