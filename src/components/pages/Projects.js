import React from 'react';

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <li>
          <a
            href="https://young-earth-93319.herokuapp.com/"
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

