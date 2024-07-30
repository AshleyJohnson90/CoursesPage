import { useEffect, useState } from 'react';
import './App.css';
import CoursesTable from './components/table';
import { Header } from './header/siteHeader'



function App() {
    return(
        <div className='App'>
            <Header />
        <div>
                <h1>Search for courses</h1>
        </div>
            <div id="body-content">
                <CoursesTable />
            </div>
        </div>
    );
}

export default App;