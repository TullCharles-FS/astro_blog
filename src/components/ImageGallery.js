import React from "react";

const images = [
  "https://plus.unsplash.com/premium_photo-1685697414658-ba6e19f7b308?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BhY2V8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmVidWxhfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1676607444703-92110b5faf7d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWlsa3klMjB3YXklMjBnYWxheHl8ZW58MHx8MHx8fDA%3D",
  "https://www.eso.org/public/archives/images/wallpaper1/eso1241b.jpg",
  "https://plus.unsplash.com/premium_photo-1679526019549-ffba4f2db233?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxhbmV0c3xlbnwwfHwwfHx8MA%3D%3D",
];

function ImageGallery() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-nebula">
        Astro Image Gallery
      </h1>

      {/* Scrollable container */}
      <div className="w-full overflow-x-auto snap-x snap-mandatory flex space-x-4 scrollbar-hide">
        {images.map((src, index) => (
          <div
            key={index}
            className="min-w-[80%] md:min-w-[50%] lg:min-w-[33.3%] snap-center"
          >
            <img
              src={src}
              alt={`Astro Image ${index + 1}`}
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
