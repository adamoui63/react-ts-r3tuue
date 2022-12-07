import * as React from 'react';
import { useState, useEffect } from 'react';
import BlogList from './Bloglist';

function Home() {
  const [Homeblogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    {
      title: 'Web dev top tips',
      body: 'lorem ipsum...',
      author: 'mario',
      id: 3,
    },
  ]);
  const [name, setName] = useState('Mario');
  const handleDelete = (id) => {
    const newBlogs = Homeblogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  useEffect(() => {
    console.log('useEffect ran!');
    console.log(name);
  }, [name]);
  return (
    <div className="home">
      <BlogList blogs={Homeblogs} handleDelete={handleDelete} />
      <button onClick={() => setName('Luigi')}> Change name </button>
      <p> {name} </p>
      <BlogList blogs={Homeblogs.filter((blog) => blog.author === 'mario')} />
    </div>
  );
}
export default Home;
