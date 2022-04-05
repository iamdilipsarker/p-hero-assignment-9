import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div>
            <div className='questions-answer'>
                <h3>What is Context API and what is the uses of Context API?</h3>
                <p>Answer: Context is a built-in API in React. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props. It can be used to solve the same problems as Redux does, but it doesn't provide a strict way of state manipulation to ensure predictable behavior. Despite its low-level nature, it might be the perfect solution in some cases.</p>
                <p>   
                Uses of Context API: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. 
                </p>
            </div>
        </div>
    );
};

export default Blogs;