import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div>
            <div className='questions-answer'>
                <h3>What is Context API and what is the Purpose of Context API?</h3>
                <p>Answer: Context is a built-in API in React. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props. It can be used to solve the same problems as Redux does, but it doesn't provide a strict way of state manipulation to ensure predictable behavior. Despite its low-level nature, it might be the perfect solution in some cases.</p>
                <p>   
                Purpose of Context API: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. 
                </p>
                <h3>What is meta tags in Html?</h3>
                <p>Answer: The meta tag in HTML provides information about HTML Document or in simple words, it provides important information about a document. Adding the meta tag while making the webpage or website, is a good practice because search engines like Google search for this meta tag in order to understand the information provided by the website. It is also helpful if the user search for a specific website then the search engine result page will display snippets in search results that will provide information related to that website. These tags are basically used to add name/value pairs to describe properties of HTML documents, such as expiry date, author name, list of keywords, document author, etc ie., it is used to specify a character set, page description, keywords, author of the document, and viewport settings. This tag is an empty element because it only has an opening tag and no closing tag, but it carries information within its attributes. A web document can include one or more meta tags depending on information, but in general, it doesn’t affect the physical appearance of the document.</p>
                <h3>Difference between Inline vs Inline-block vs Block-elements?</h3>
                <p>Answer: Inline: The element doesn’t start on a new line and only occupy just the width it requires. We can’t set the width or height.
                </p>

                <p>
                 Inline-block: It’s formatted just like the inline element, where it doesn’t start on a new line. BUT, we can set width and height values.
                </p>
                <p>
                    Block-elements: The element will start on a new line and occupy the full width available. And we can set width and height values.
                </p>
            </div>
        </div>
    );
};

export default Blogs;