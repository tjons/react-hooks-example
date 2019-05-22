import React, { useState } from 'react';
import TopicsCounter from './TopicsCounter';
import useListIsHidden from './hideList';

export default function WorkList() {
    const [topics, setTopics] = useState([]);
    const [newTodo, setNewTodo] = useState({});
    const listIsHidden = useListIsHidden();

    const getNewTodo = (title) => {
        return {
            title,
            completed: false
        };
    };

    const markComplete = (topic) => {
        const newTopics = [...topics];
        
        newTopics.find(t => topic === t).completed = true;

        setTopics(newTopics);
    }

    const getCompletedCount = () => {
        return topics.filter(topic => topic.completed).length;
    }

    const getTotalCount = () => {
        return topics.length;
    }

    return (
        <>
            {listIsHidden ? '' : 
            <div>
                <h2>Work Todo List</h2>
                <TopicsCounter completeCount={getCompletedCount()} totalCount={getTotalCount()}/>
                <input type="text" onChange={(e) => setNewTodo(getNewTodo(e.target.value))}/>
                <button onClick={() => {
                    setTopics(topics.concat(newTodo));
                }}>Add todo</button>
                <ul>
                {topics.map((topic, index) => 
                    <li key={index}>
                        {topic.completed ? <s>{topic.title}</s> : <>{topic.title}</>}<button onClick={() => markComplete(topic)}>Mark as complete</button>
                    </li>
                )}
                </ul>
            </div>}
        </>
    );
}
