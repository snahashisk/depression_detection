import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import Charts from "./components/Charts";

function App() {
  return (
    <div className="grid grid-cols-5 grid-rows-6 p-0 m-0 w-full h-screen bg-gray-200">
      <Navbar />
      <div className="col-span-4 row-span-1 bg-gray-200 p-4">
        <SearchBar />
      </div>
      <div className="col-span-4 row-span-2 bg-white grid grid-cols-2 grid-rows-1 gap-4 p-4 m-4 rounded-md">
        <Card
          heading="Your BMI"
          amount="579,000"
          saving="Saved 25%"
          background="bg-blue-500"
        />
        <Card
          heading="Sleep Duration"
          amount="79,000"
          saving="Saved 25%"
          background="bg-blue-400"
        />
      </div>
      <div className="col-span-4 row-span-3 bg-white rounded-md p-4 grid grid-cols-4 gap-4 mx-4 my-1">
        <div className="col-span-2 bg-gray-100 rounded-md">
          <div className="py-4 px-6">
            <h3 className="font-medium text-gray-600 text-xl">
              Drinking Index
            </h3>
            <p className="text-gray-500">Drinking in injurious to health</p>
          </div>
          <Charts value={25} />
          <h2 className="text-center p-2 text-md font-medium">
            <span className="bg-green-500 px-4 py-2 rounded-full text-white">
              Not At Risk
            </span>
          </h2>
          <p className="p-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="col-span-2 bg-gray-100 rounded-md">
          <div className="py-4 px-6">
            <h3 className="font-medium text-gray-600 text-xl">Smoking Index</h3>
            <p className="text-gray-500">Smoking in injurious to health</p>
          </div>
          <Charts value={85} />
          <h2 className="text-center p-2 text-md font-medium">
            <span className="bg-red-500 px-4 py-2 rounded-full text-white">
              At Risk
            </span>
          </h2>
          <p className="p-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
