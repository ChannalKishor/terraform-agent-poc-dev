export const isDev = import.meta.env.DEV;
export const API_BASE = isDev ? `http://${window.location.hostname}:8000/api` : '/api';
