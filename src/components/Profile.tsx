import React from 'react';
import profilePhoto from '../assets/profile.jpeg'; // 👈 Update path if needed

const Profile: React.FC = () => {
  return (
    <section className="flex items-center justify-center p-8">
      <img
        src={profilePhoto}
        alt="Profile"
        className="w-48 h-48 rounded-full shadow-lg object-cover"
      />
    </section>
  );
};

export default Profile;
