import axios from "axios";

export function setupAPIClient(ctx = undefined) {

  const api = axios.create({
    baseURL: 'localhost:9091',
    
  });

  return api;
}