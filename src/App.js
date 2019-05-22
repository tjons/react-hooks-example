import React from 'react';
import PersonalList from './PersonalList';
import WorkList from './WorkList';

export default function App() {
    return (
        <div>
            <h1>Welcome to the React Hooks To-do list!</h1>
            <PersonalList/>
            <WorkList/>
        </div>
    );
}
