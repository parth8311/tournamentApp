import TeamList from "../components/TeamList";
import API from "../api";

const Dashboard = () => {
  const handleCreateGroups = () => {
    API.post("/groups/create").then(() => {
      alert("Groups created!");
      window.location.reload();
    });
  };

  return (
    <div>
      <h2 className="heading-center">Dashboard</h2>
      <div className="center">
        <button onClick={handleCreateGroups}>Create Groups</button>
      </div>
      <TeamList />
    </div>
  );
};

export default Dashboard;
