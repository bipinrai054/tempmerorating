import {View, Text} from 'react-native';
import React from 'react';
import axios from 'axios';

// const url = 'http://merorating.azurewebsites.net/api/recentReview';
const url = 'https://jsonplaceholder.typicode.com/todos/1';

export default function Home() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    // const fetchAPI = async () => {
    //   await axios
    //     .get(url)
    //     .then(res => console.log(res.data))
    //     .catch(err => console.log(err));
    // };

    // const fetchAPI = async () =>
    //   await fetch(url).then(res => console.log(res.json()));
    // fetchAPI();

    axios
      .get('http://merorating.azurewebsites.net/api/recentReview')
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, []);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
