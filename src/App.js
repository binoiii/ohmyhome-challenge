import { GlobalProvider } from "./context/GlobalState";
import FilterCont from "./components/filter/filterCont";
import ResultCont from "./components/result/resultCont";

function App() {
  return (
    <GlobalProvider>
      <header className="fixed top-0 right-0 left-0 bg-white">
        <h1 className="p-6 border-b border-gray-tertiary text-center text-gray-primary font-primary font-medium">
          Properties
        </h1>
      </header>
      <main className="mt-20">
        <FilterCont />
        <ResultCont />
      </main>
    </GlobalProvider>
  );
}

export default App;
