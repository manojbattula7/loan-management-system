// client/components/Info.jsx
import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa'; // Import icons from a library like react-icons

const Info = () => {
  return (
    <div>
      <h2>Loan Policy Information</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget felis
        sed arcu fermentum aliquet. Quisque quis tincidunt nunc. Sed at velit ac
        sapien viverra feugiat. Aliquam erat volutpat. Fusce vehicula cursus urna,
        quis sollicitudin tortor ultrices vel. Donec ac condimentum dolor.
      </p>
      <p>
        Duis efficitur, purus eget malesuada aliquam, eros nisl mattis est, eget
        cursus orci enim id justo. Aliquam at odio non justo tempus euismod. Ut
        eget fringilla nisl. Praesent eu libero in justo egestas placerat. Sed ac
        massa non risus consectetur lacinia. Sed ultricies ipsum ac massa
        dignissim, a tempor erat vestibulum.
      </p>
      <p>
        Follow us on social media:
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} style={{ marginLeft: '10px', marginRight: '10px' }} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} style={{ marginLeft: '10px' }} />
        </a>
      </p>
    </div>
  );
};

export default Info;
