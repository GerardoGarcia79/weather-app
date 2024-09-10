import "./App.css";
import Layout from "./components/Layout";
import useData from "./hooks/useData";

export interface Weather {
  name: string;
}

function App() {
  const { data, error, isLoading } = useData();

  if (error) return <p className="text-red-600 text-2xl">{error}.</p>;
  console.log(data);

  return (
    <div className="bg-[#f6c0ad] h-screen flex justify-center">
      {isLoading ? (
        <p className="text-red-600 text-2xl">Loading...</p>
      ) : (
        <Layout />
      )}
    </div>
  );
}

export default App;
