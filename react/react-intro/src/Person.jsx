import React from "react";


const personDetail = {
    imageSrc:
      "https://media.gettyimages.com/id/2053009863/photo/tokyo-japan-actress-rashmika-mandanna-arrives-at-the-red-carpet-of-the-crunchyroll-anime.jpg?s=612x612&w=gi&k=20&c=omvkifdG9nLdImRGawWZ-uXvgKC70lw92YABWFd20i4=",
    actorName: "Rasmika Mandhana",
  };
  
const Person = () => {
  return (
    <div
    style={{
        border:" 1px solid black"
    }}
    >
      <img
        style={{
          height: "400px",
          width: "400",
          objectFit: "cover",
        }}
        src={ personDetail.imageSrc}
        alt="Crush Image"
        
      />
      <h3>{personDetail.actorName}</h3>
    </div>
  );
};

export default Person;
