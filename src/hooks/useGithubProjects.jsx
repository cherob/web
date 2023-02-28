import { useState, useEffect } from 'react';

function useGithubProjects(username) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?type=owner`);
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProjects();
  }, [username]);

  return projects;
}

export default useGithubProjects;
