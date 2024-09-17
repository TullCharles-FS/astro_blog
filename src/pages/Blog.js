import React from "react";

const posts = [
  {
    title: "Black Holes: The Cosmic Giants",
    date: "September 15, 2024",
    summary: "Exploring the most mysterious objects in space.",
  },
  {
    title: "The Enigma of Dark Matter",
    date: "August 30, 2024",
    summary: "A look at one of the universe’s greatest mysteries.",
  },
  {
    title: "Gravitational Waves: A New Window into the Universe",
    date: "July 10, 2024",
    summary: "How gravitational waves are helping us explore the cosmos.",
  },
];

function Blog() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-nebula">
        Latest Blog Posts
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.title}
            className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out"
          >
            <h2 className="text-2xl font-bold text-space">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-4">{post.date}</p>
            <p>{post.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
