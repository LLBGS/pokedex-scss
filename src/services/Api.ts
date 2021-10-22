import axios from 'axios';

export const Api = axios.create({
  baseURL: process.env.API,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
