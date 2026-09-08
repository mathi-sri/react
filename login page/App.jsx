
import Demostate from "./components/Demostate";
import { UserProvider } from "./Demo/usercontext";


function App() {
  return (
    <UserProvider>
      <Demostate />
    </UserProvider>
  );
}

export default App;