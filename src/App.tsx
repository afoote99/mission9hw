import React from 'react';
import './App.css';
import teamsData from '/Users/afoot/Desktop/Code/Core/413/VisualStudio 413stuff/Mission9/mission9hw/src/CollegeBasketballTeams.json';

//Creating an interface of what we will be using from the json file
interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

//setting teams equal to the Team[] array which contains will be populated with all the information from the json data
const teams: Team[] = teamsData.teams;

//Deciding what info will actually be shown on the "cards"
interface TeamCardProps {
  name: string;
  mascot: string;
  location: string;
}

//Nice little heading to welcome the user to the page
function Heading() {
  return <h1>NCAA Basketball Teams</h1>;
}

//Defining the setup of each card based on the info from the TeamCardProps
function TeamCard({ name, mascot, location }: TeamCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Mascot: {mascot}</p>
      <p>Location: {location}</p>
    </div>
  );
}

//This allows us to iterate over each object in the .json and give our Teamcard to each team
function TeamsList() {
  return (
    <div>
      {teams.map((team) => (
        <TeamCard
          name={team.school}
          mascot={team.name}
          location={`${team.city}, ${team.state}`}
        />
      ))}
    </div>
  );
}

//runs the app and the functions made!
function App() {
  return (
    <div className="App">
      <Heading />
      <TeamsList />
    </div>
  );
}

export default App;
