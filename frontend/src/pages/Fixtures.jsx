import FixtureList from "../components/FixtureList";
import API from "../api";

const Fixtures = () => {
  const handleGenerateFixtures = () => {
    API.post("/fixtures/generate").then(() => {
      alert("Fixtures generated!");
      window.location.reload();
    });
  };

  return (
    <div>
      <h2 className="heading-center">Fixtures View</h2>
      <div className="center">
        <button onClick={handleGenerateFixtures}>Generate Fixtures</button>
      </div>
      <FixtureList />
    </div>
  );
};

export default Fixtures;
