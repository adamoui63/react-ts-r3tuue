import React from 'react';
const BlogList = ({ blogs, title, handleDelete }) => {
  //Alternatively
  //const BlogList = (props) {
  //const blogs = props.blogs;
  //const title = props.title;
  return (
    <div className="Blog-list">
      <h2> {title} </h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2> {blog.title} </h2>
          <p> Written by {blog.author} </p>
          <button onClick={() => handleDelete(blog.id)}> delete blog </button>
        </div>
      ))}
    </div>
  );
};
export default BlogList;
