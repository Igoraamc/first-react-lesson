import React, { useEffect, useState } from 'react';
import { list, create } from '../../network/team';

const Team = () => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [league, setLeague] = useState('');
  const [teams, setTeams] = useState([]);

  const handleCreate = () => {
    const team = {
      name: name,
      country: country,
      league: league
    };

    create(team);
  };

  const handleList = async () => {
    const response = await list();
    setTeams(response.data);
  };

  useEffect(() => {
    handleList();
  }, []);

  return (
    <div>
      <input onChange={(event) => setName(event.target.value)} />
      <input onChange={(event) => setCountry(event.target.value)} />
      <input onChange={(event) => setLeague(event.target.value)} />

      <h1>Nome do time: { name }</h1>
      <h1>País do time: { country }</h1>
      <h1>Liga do time: { league }</h1>

      <button onClick={handleCreate} >Criar time</button>

      <h1>Times já criados</h1>
      <ul>
        { teams.map(team => (<li>{ team.name }</li>)) }
      </ul>
    </div>
  );
};

export default Team;