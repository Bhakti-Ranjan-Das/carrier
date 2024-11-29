import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { ProfileForm } from './components/profile/ProfileForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <section id="profile" className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Create Your Profile</h2>
            <ProfileForm />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;