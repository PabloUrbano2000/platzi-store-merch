import React from 'react';
import axios from 'axios';

const useGoogleAddress = (address) => {
  const [map, setMap] = React.useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDYgXNltmcHxXwdhobP_EmpjxQQUKucxBk`;
  React.useEffect(async () => {
    const response = await axios(API);
    console.log(response.data);
    setMap(response.data.results[0].geometry.location);
  }, []);
  return map;
};

export default useGoogleAddress;
