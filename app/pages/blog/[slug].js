import React from 'react';
import { useRouter } from 'next/router'; // Import the useRouter hook from Next.js

const BlogPost = () => {
  const router = useRouter(); // Initialize the router object
  const { slug } = router.query; // Retrieve the 'slug' parameter from the router query

  // Fetch blog post data based on the slug parameter
  // For now, let's assume you have a function called getBlogPostBySlug(slug)
  // that fetches the data from an API or database

  // Placeholder blog post data
  const blogPost = {
    title: 'Sample Blog Post',
    content: 'This is a sample blog post. Replace this with actual content fetched based on the slug.',
  };

  // Render the blog post title and content
  return (
    <div>
      <h1>{blogPost.title}</h1>
      <p>{blogPost.content}</p>
    </div>
  );
};

export default BlogPost;