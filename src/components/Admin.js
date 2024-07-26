import React from 'react';

// Shared Tailwind CSS class strings
const inputClass = "mt-1 block w-full border border-zinc-300 rounded-md p-2";
const linkClass = "block p-2 hover:bg-zinc-200";

const Sidebar = () => {
  return (
    <aside className="w-1/4 bg-white shadow-lg p-4">
      <div className="flex items-center mb-4">
        <div className="rounded-full bg-zinc-300 h-16 w-16"></div>
        <div className="ml-4">
          <h2 className="font-bold">Maxine Johnson</h2>
          <p className="text-muted-foreground">(Admin)</p>
        </div>
      </div>
      <nav>
        <ul className="space-y-2">
          <li><a href="#" className={linkClass}>Dashboard</a></li>
          <li><a href="#" className={linkClass}>My Profile</a></li>
          <li><a href="#" className={linkClass}>Messages</a></li>
          <li><a href="#" className={linkClass}>My Listing</a></li>
          <li><a href="#" className={linkClass}>Listing</a></li>
          <li><a href="#" className={linkClass}>Agents</a></li>
          <li><a href="#" className={linkClass}>Change Password</a></li>
          <li><a href="#" className={linkClass}>Logout</a></li>
        </ul>
      </nav>
    </aside>
  );
};

const Form = () => {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Property Title (required)</label>
        <input type="text" className={inputClass} required />
      </div>
      <div>
        <label className="block text-sm font-medium">Category (required)</label>
        <select className={inputClass} required>
          <option>Apartments</option>
          <option>Houses</option>
          <option>Commercial</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Property Price (required)</label>
        <input type="number" className={inputClass} required />
      </div>
      <div>
        <label className="block text-sm font-medium">Listed in (required)</label>
        <select className={inputClass} required>
          <option>Rental</option>
          <option>Sale</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Description (required)</label>
        <textarea className={inputClass} required></textarea>
      </div>
      <button type="submit" className="bg-primary text-white p-2 rounded-lg">Submit</button>
    </form>
  );
};

const Dashboard = () => {
  return (
    <div className="flex bg-background min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 bg-light-200">
        <h1 className="text-2xl font-bold mb-4">Add Property</h1>
        <Form />
      </main>
    </div>
  );
};

export default Dashboard;
