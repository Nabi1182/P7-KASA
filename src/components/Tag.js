import React from 'react';
import './tag.css';


const Tag = ({ tags }) => {
	return (
    <>
      {Array.isArray(tags) && tags.map((tag) => (
        <span className="tag" key = {tag}>{tag}</span>
      ))}
    </>
  );
};

export default Tag;