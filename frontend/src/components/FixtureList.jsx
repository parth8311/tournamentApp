import { useEffect, useState } from 'react';
import API from '../api';

const FixtureList = () => {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    API.get('/fixtures/get').then((res) => setFixtures(res.data));
  }, []);

  return (
    <div className="container">
      <h3>Match Fixtures</h3>
      {fixtures.map((fixture) => (
        <div className="group-card" key={fixture._id}>
          <h4>{fixture.groupId?.name || 'Unnamed Group'}</h4>
          <ul className="list">
            {fixture.matches.map((match, index) => (
              <li key={index}>
                {match.teamA.name} vs {match.teamB.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FixtureList;
