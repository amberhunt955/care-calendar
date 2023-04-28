// import components
import TodaysEventsList from "../../components/TodaysEventsList/TodaysEventsList";

// import utilities
import { checkToken } from "../../utilities/users-service";

function MainPage() {

  const handleCheckToken = async () => {
    const expDate = await checkToken();
    console.log(expDate);
  };

  return (
    <div>
      <TodaysEventsList />
      <button onClick={handleCheckToken}>
        Check When My Login Token Expires
      </button>
    </div>
  );
}

export default MainPage;
