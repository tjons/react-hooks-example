import React, { useEffect } from 'react';

export default function TopicsCounter(props) {
    useEffect(() => {
        if (props.totalCount > 0) {
            document.title = `Todo List: ${props.totalCount - props.completeCount} items left`;
        } else {
            document.title = 'Todo List';
        }
    });

    return (
        <p>You have completed {props.completeCount} of {props.totalCount} topics!</p>
    );
}