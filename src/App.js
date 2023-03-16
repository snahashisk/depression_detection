import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import Charts from "./components/Charts";
import PieCharts from "./components/Piecharts";
import PieCard from "./components/PieCard";

function App() {
  return (
    <div className="grid grid-cols-5 grid-rows-6 p-0 m-0 w-full h-screen bg-gray-200">
      <Navbar />
      <div className="col-span-4 row-span-1 bg-gray-200 p-4">
        <SearchBar />
      </div>
      <div className="col-span-4 row-span-3 bg-white grid grid-cols-2 grid-rows-2 gap-4 p-4 m-4 rounded-md">
        <Card
          heading="Total Income"
          amount="$579,000"
          saving="Saved 25%"
          background="bg-blue-500"
        />
        <Card
          heading="Total Expenses"
          amount="$79,000"
          saving="Saved 25%"
          background="bg-blue-400"
        />
        <Card
          heading="Cash on Hand"
          amount="$92,000"
          saving="Saved 25%"
          background="bg-purple-500"
        />
        <Card
          heading="Net Profit Margin"
          amount="$179,000"
          saving="Saved 25%"
          background="bg-green-500"
        />
      </div>
      <div className="col-span-4 row-span-2 bg-white rounded-md p-4 grid grid-cols-4 gap-4 mx-4 my-1">
        <div className="col-span-2 bg-gray-100 rounded-md">
          <div className="py-4 px-6">
            <h3 className="font-medium text-gray-600">AP and AR Balance</h3>
            <p className="text-gray-500">Avg $5,236</p>
          </div>
          <Charts />
        </div>
        <div className="col-span-1 bg-gray-100 rounded-md p-4">
          <PieCard />
        </div>
        <div className="col-span-1 bg-gray-100 rounded-md p-4">
          <PieCard />
        </div>
      </div>
    </div>
  );
}

export default App;
