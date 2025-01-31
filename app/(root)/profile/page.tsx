import React from "react";

const Profile = () => {
  const events = [
    { id: 1, title: "React Conference 2025", date: "March 10, 2025", location: "San Francisco, CA" },
    { id: 2, title: "Next.js Workshop", date: "April 5, 2025", location: "New York, NY" },
    { id: 3, title: "Tailwind CSS Masterclass", date: "May 20, 2025", location: "Los Angeles, CA" },
  ];

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-gray-100 p-6 flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
        <p className="text-gray-600">Welcome to your event dashboard!</p>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Your Upcoming Events</h2>
          <ul className="space-y-4">
            {events.map((event) => (
              <li key={event.id} className="bg-blue-50 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-blue-900">{event.title}</h3>
                <p className="text-blue-700">📅 {event.date}</p>
                <p className="text-blue-700">📍 {event.location}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
