//Tradtionally - html page but in react it is comporpnet
import "./UserProfile.css";

import style from "./UserProfile.module.css";
import UserProfile from "./components/UserProfile";
const App = () => {
  return (
    <div>
      <UserProfile name="Emmanuel" />
    </div>
  );
};

export default App;
