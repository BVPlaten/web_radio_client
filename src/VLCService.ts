import axios from "axios";

const API_BASE_URL = "https://localhost:7208/api/VLC"; // Ändern Sie dies entsprechend der Basis-URL Ihrer REST-API

export default class VLCService {
  static async play(url: string) {
    return await axios.post(`${API_BASE_URL}/play`, { Url: url });
  }

  static async stop() {
    return await axios.post(`${API_BASE_URL}/stop`);
  }

  static async volumeUp() {
    return await axios.get(`${API_BASE_URL}/volume/up`);
  }

  static async volumeDown() {
    return await axios.get(`${API_BASE_URL}/volume/down`);
  }

  static async volumeMute() {
    return await axios.get(`${API_BASE_URL}/volume/mute`);
  }
}
