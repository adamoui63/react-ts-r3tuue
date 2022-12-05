import * as React from 'react';
import {useState} from 'react';
import BlogList from './Bloglist';

function Home(){
  const[Homeblogs,setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);
  return (<div className = "home"> 
           <BlogList blogs = {Homeblogs}  title = "All blogs!"/>
           <BlogList blogs = {Homeblogs.filter((blog)=>blog.author === 'mario')}  title = "Mario's blogs!"/>
            </div> 
            );
}
export default Home;