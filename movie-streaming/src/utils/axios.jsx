import React from 'react'
import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODE1MzVkY2IyMzVhNzljY2M0YWU1OTc0YmIwNWJmOCIsInN1YiI6IjY2NDc4OTQ4ZjBkZDFiYjM3ZWI1MzhkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.732UMxqTrAWWIhB6Sxjx8j9iSJlhWbiuiZrpD4JTICM',
  }

});

export default instance;