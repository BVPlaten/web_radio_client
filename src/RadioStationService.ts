import axios, { AxiosResponse } from "axios";

const API_BASE_URL = "https://localhost:7208/api/RadioStations"; // Ändern Sie dies entsprechend der Basis-URL Ihrer REST-API

export interface RadioStation {
  name: string;
  url: string;
}

export default class RadioStationService {
  static async getAllRadioStations(): Promise<AxiosResponse<RadioStation[]>> {
    return await axios.get<RadioStation[]>(`${API_BASE_URL}`);
  }

  static async addRadioStation(radioStation: RadioStation): Promise<AxiosResponse<void>> {
    return await axios.post<void>(`${API_BASE_URL}`, radioStation);
  }

  static async deleteRadioStation(name: string): Promise<AxiosResponse<void>> {
    return await axios.delete<void>(`${API_BASE_URL}/${encodeURIComponent(name)}`);
  }
}
