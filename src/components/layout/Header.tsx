import React from 'react';
import { BrainCog } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BrainCog className="h-8 w-8" />
            <h1 className="text-2xl font-bold">CareerAI</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#profile" className="hover:text-indigo-200 transition">Profile</a></li>
              <li><a href="#assessment" className="hover:text-indigo-200 transition">Assessment</a></li>
              <li><a href="#recommendations" className="hover:text-indigo-200 transition">Recommendations</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}