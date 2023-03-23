import React, { useEffect, useState } from "react";
import RadioStationService, { RadioStation } from "./RadioStationService";
import { Container, ListGroup } from "react-bootstrap";

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
    <Container>
      <h1 className="my-4">Radio Stations</h1>
      <ListGroup>
        {radioStations.map((station) => (
          <ListGroup.Item key={station.name}>
            {station.name} - {station.url}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default RadioStationsList;