import React, { useState, useEffect } from 'react';


export default function Events({userId}) {
    const [myEvent, setMyEvent] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!userId) return
        fetch(`http://127.0.0.1:3000/events?user_id=${userId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }
                return response.json();
            })
            .then(data => {
                setMyEvent(data);
            })
            .catch(error => {
                setError(error.message);
            });
    }, [userId]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!myEvent) {
        return <div className='text-red-500'>Loading...</div>;
    }


    return (
        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none">Upcoming Events</h5>
                <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                    View all
                </a>
            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-3 sm:py-4" key={myEvent.id}>
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img className="w-8 h-8 rounded-full" src="https://res.cloudinary.com/dfczhaomn/image/upload/v1708049373/f189e2201c544ce1b82ad91b67dc1cfd_mybesq.jpg" alt="Neil image" />
                            </div>
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium truncate">
                                    {myEvent.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    {myEvent.location}
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    {myEvent.description}
                                </p>
                            </div>
                            {/* <div className="inline-flex items-center font-bold text-red-600 text-xl">
                                $320
                            </div> */}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
