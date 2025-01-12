import  { useState } from 'react';
import { SignOutButton, useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
export default function ToggleSheet() {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
     
      navigate("/");
    };
  
  const toggleSheet = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
   
      <button
        onClick={toggleSheet}
        className="absolute  right-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
      >
        {isOpen ? "Close" : "Open Profile"}
      </button>

     
      {isOpen && (
        <div className="absolute  right-0 mt-12  p-4 bg-white shadow-lg rounded-md border">
          <h2 className="text-lg font-bold">User Info</h2>
          <img
      src={user?.imageUrl}
      alt="User Profile"
      className="w-16 h-16 rounded-full border-2 border-gray-300 shadow-sm"
    />
          {user ? (
            <div className="mt-2">
              <p>
                <strong>Name:</strong> {user.firstName || "No Name"}
              </p>
              <p>
                <strong>Email:</strong> {user.emailAddresses?.[0]?.emailAddress || "No Email"}
              </p>
              <p>
                <strong>Resumes Built:</strong> 0
              </p>
              <button
      onClick={handleSignOut}
      className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-700 hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-all"
    >
      <SignOutButton/>
    </button> 
            </div>
          ) : (
            <p>Loading user info...</p>
          )}
        </div>
      )}
    </div>
  );
}
