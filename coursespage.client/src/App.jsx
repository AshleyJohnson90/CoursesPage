import { useEffect, useState } from 'react';
import './App.css';
import CoursesTable from './components/table';

function App() {
    return(
        <div className='App'>
            <header className='App-header'>
                <h1>Search for courses</h1>
            </header>
            <main>
                <CoursesTable />
            </main>
        </div>
    );
}

export default App;