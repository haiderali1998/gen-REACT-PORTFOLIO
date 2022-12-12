import React from 'react';
import {
 
  faGithub,
 
} from '@fortawesome/free-brands-svg-icons'



export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <li>
          <a
            href="https://github.com/haiderali1998"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
    </div>
  );
}
