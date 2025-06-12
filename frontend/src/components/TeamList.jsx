import { useEffect, useState } from 'react';
import API from '../api';

const TeamList = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    API.get('/teams/get').then((res) => setTeams(res.data));
  }, []);

  return (
    <div className="container">
      <h3>Registered Teams ({teams.length})</h3>
      <ul className="list">
        {teams.map((team) => (
          <li key={team._id}>{team.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamList;
