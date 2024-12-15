import axios from 'axios';

// Define the base URLs for different services
export const BASE_URLS = {
  user: "http://localhost:5001", // Auth service
  task: "http://localhost:5002", // User service
  submission: "http://localhost:5003", // Order service
};

// Create the axios instance (default will use 'auth' service)
export const api = axios.create({
  baseURL: BASE_URLS.user, // Default to auth service
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to dynamically change the base URL based on the service type
export const setBaseUrl = (serviceType) => {

  const serviceUrl = BASE_URLS[serviceType];
  console.log("set",serviceType)
  if (serviceUrl) {
    api.defaults.baseURL = serviceUrl;
  } else {
    throw new Error(`Service type "${serviceType}" not found`);
  }
};

// Function to set the Authorization header if token is available
export const setAuthHeader = (token) => {
  if (token != undefined) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};


