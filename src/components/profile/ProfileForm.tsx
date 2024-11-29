import React, { useState } from 'react';

interface ProfileData {
  name: string;
  skills: string[];
  experience: string;
  interests: string[];
}

export function ProfileForm() {
  const [profile, setProfile] = useState<ProfileData>({
    name: '',
    skills: [],
    experience: '',
    interests: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle profile submission
    console.log('Profile submitted:', profile);
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile(prev => ({
      ...prev,
      skills: e.target.value.split(',').map(skill => skill.trim()),
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          value={profile.name}
          onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
          Skills (comma-separated)
        </label>
        <input
          type="text"
          id="skills"
          placeholder="React, TypeScript, Node.js"
          onChange={handleSkillsChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
          Work Experience
        </label>
        <textarea
          id="experience"
          rows={4}
          value={profile.experience}
          onChange={(e) => setProfile(prev => ({ ...prev, experience: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Save Profile
      </button>
    </form>
  );
}