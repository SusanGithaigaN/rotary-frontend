import React from 'react';

export default function Events() {
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
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img className="w-8 h-8 rounded-full" src="https://res.cloudinary.com/dfczhaomn/image/upload/v1708049373/f189e2201c544ce1b82ad91b67dc1cfd_mybesq.jpg" alt="Neil image" />
                            </div>
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium truncate">
                                    Neil Sims
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@windster.com
                                </p>
                            </div>
                            <div className="inline-flex items-center font-bold text-red-600 text-xl">
                                $320
                            </div>
                        </div>
                    </li>

                    {/* Placeholder code to be removed */}
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center ">
                            <div className="flex-shrink-0">
                            <img className="w-8 h-8 rounded-full" src="https://res.cloudinary.com/dfczhaomn/image/upload/v1708049373/f189e2201c544ce1b82ad91b67dc1cfd_mybesq.jpg" alt="Neil image" />
                            </div>
                            <div className="flex-1 min-w-0 ms-4">
                            <p className="text-sm font-medium truncate">
                                    Bonnie Green
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@windster.com
                                </p>
                            </div>
                            <div className="inline-flex items-center font-bold text-red-600 text-xl">
                                $3467
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                            <img className="w-8 h-8 rounded-full" src="https://res.cloudinary.com/dfczhaomn/image/upload/v1708049373/f189e2201c544ce1b82ad91b67dc1cfd_mybesq.jpg" alt="Neil image" />
                            </div>
                            <div className="flex-1 min-w-0 ms-4">
                            <p className="text-sm font-medium truncate">
                                    Michael Gough
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@windster.com
                                </p>
                            </div>
                            <div className="inline-flex items-center font-bold text-red-600 text-xl">
                                $67
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center ">
                            <div className="flex-shrink-0">
                            <img className="w-8 h-8 rounded-full" src="https://res.cloudinary.com/dfczhaomn/image/upload/v1708049373/f189e2201c544ce1b82ad91b67dc1cfd_mybesq.jpg" alt="Neil image" />
                            </div>
                            <div className="flex-1 min-w-0 ms-4">
                            <p className="text-sm font-medium truncate">
                                    Lana Byrd
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@windster.com
                                </p>
                            </div>
                            <div className="inline-flex items-center font-bold text-red-600 text-xl">
                                $367
                            </div>
                        </div>
                    </li>
                    <li className="pt-3 pb-0 sm:pt-4">
                        <div className="flex items-center ">
                            <div className="flex-shrink-0">
                            <img className="w-8 h-8 rounded-full" src="https://res.cloudinary.com/dfczhaomn/image/upload/v1708049373/f189e2201c544ce1b82ad91b67dc1cfd_mybesq.jpg" alt="Neil image" />
                            </div>
                            <div className="flex-1 min-w-0 ms-4">
                            <p className="text-sm font-medium truncate">
                                    Thomes Lean
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@windster.com
                                </p>
                            </div>
                            <div className="inline-flex items-center font-bold text-red-600 text-xl">
                                $2367
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
