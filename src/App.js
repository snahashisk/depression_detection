import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import Charts from "./components/Charts";
import {
  sleepQuality,
  checkBMI,
  drinking_index,
  smoking_risk,
  drinking_risk,
} from "./helper";

function App() {
  const [detail, setDetail] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://127.0.0.1:8000/detail");
      const data = await response.json();
      setDetail(data.data);
    }
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-5 grid-rows-6 p-0 m-0 w-full h-screen bg-gray-200">
      <Navbar />
      <div className="col-span-4 row-span-1 bg-gray-200 p-4">
        <SearchBar />
      </div>
      <div className="col-span-4 row-span-2 bg-white grid grid-cols-2 grid-rows-1 gap-4 p-4 m-4 rounded-md">
        <Card
          heading="Body Mass Index"
          amount={detail.bmi}
          saving={checkBMI(detail.bmi)}
          background="bg-blue-500"
        />
        <Card
          heading="Sleep Duration"
          amount={detail.sleep_duration}
          saving={`${sleepQuality(detail.sleep_duration)}`}
          background="bg-purple-500"
        />
      </div>
      <div className="col-span-4 row-span-3 bg-white rounded-md p-4 grid grid-cols-4 gap-4 mx-4 my-1">
        <div className="col-span-2 bg-gray-100 rounded-md">
          <div className="py-4 px-6">
            <h3 className="font-medium text-gray-600 text-xl">
              Drinking Index
            </h3>
            <p className="text-gray-500">
              Alocohol kills more than 3 million people every year
            </p>
          </div>
          <Charts value={drinking_index(detail.drinking_index)} />
          <h2 className="text-center p-2 text-md font-medium">
            {drinking_risk(detail.drinking_index)}
          </h2>
          <p className="p-4 text-center">
            "Choose clarity over chaos: prioritize your mental health, skip the
            drink."
          </p>
        </div>
        <div className="col-span-2 bg-gray-100 rounded-md">
          <div className="py-4 px-6">
            <h3 className="font-medium text-gray-600 text-xl">Smoking Index</h3>
            <p className="text-gray-500">
              Tobacco kills more than 8 million people each year.
            </p>
          </div>
          <Charts value={detail.smoking_index} />
          <h2 className="text-center p-2 text-md font-medium">
            {smoking_risk(detail.smoking_index)}
          </h2>
          <p className="p-4 text-center">
            "Choose a healthier path, prioritize mental health and say no to
            smoking."
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
