import React, { useEffect, useState } from "react";
import RadioStationService, { RadioStation } from "./RadioStationService";

const RadioStationsList = () => {
  const [radioStations, setRadioStations] = useState<RadioStation[]>([]);

  useEffect(() => {
    fetchRadioStations();
  }, []);

  const fetchRadioStations = async () => {
    try {
      const response = await RadioStationService.getAllRadioStations();
      setRadioStations(response.data);
    } catch (error) {
      console.error("Error fetching radio stations:", error);
    }
  };

  return (
    <div>
      <h1>Radio Stations</h1>
      <ul>
        {radioStations.map((station) => (
          <li key={station.name}>{station.name} - {station.url}</li>
        ))}
      </ul>
    </div>
  );
};

export default RadioStationsList;
