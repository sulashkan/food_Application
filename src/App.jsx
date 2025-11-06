import { DataProvider } from "./context-api/dataProvider";
import Routing from "./router/Routing";

function App() {
  return (
    <DataProvider>
      <Routing />
    </DataProvider>
  );
}

export default App;
