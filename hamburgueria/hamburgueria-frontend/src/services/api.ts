import axios from "axios";

let baseURL = 'http://localhost:9090';

export function setupAPIClient(ctx = undefined) {

  const api = axios.create({
    baseURL,
    
  });

  return api;
}