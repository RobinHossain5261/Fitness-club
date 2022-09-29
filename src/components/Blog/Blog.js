import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-container'>
            <div>
                <h1> <strong>Question:</strong>How does react work?</h1>
                <p><strong>Answer: </strong>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div>
                <h1> <strong>Question:</strong>What's the difference between state and props?</h1>
                <p><strong>Answer: </strong>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.</p>
            </div>
            <div>
                <h1> <strong>Question:</strong>What is the use of useEffect accept API?</h1>
                <p><strong>Answer: </strong>Without api we can use useEffect in many ways. such as Running on state change: validating input field. Running on state change: live filtering. Running on state change: trigger animation on new array value etc.</p>
            </div>
        </div>
    );
};

export default Blog;