import * as React from 'react';
import { AddMoney } from './components/AddMoney';
import { Overview } from './components/Overview';
import './style.css';

export default function App() {
  return (
    <div className="grid place-items-center h-screen">
      <h1 className="mb-6 text-5xl font-bold">Hello Dokkie!</h1>
      <AddMoney/>
      <Overview/>
    </div>
  );
}
