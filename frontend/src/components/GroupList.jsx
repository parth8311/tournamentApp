import { useEffect, useState } from 'react';
import API from '../api';

const GroupList = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    API.get('/groups/get').then((res) => setGroups(res.data));
  }, []);

  return (
    <div className="container">
      <h3>Groups</h3>
      {groups.map((group, index) => (
        <div className="group-card" key={group._id}>
          <h4>{group.name}</h4>
          <ul className="list">
            {group.teams.map((team) => (
              <li key={team._id}>{team.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GroupList;
