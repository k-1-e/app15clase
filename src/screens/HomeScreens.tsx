import React, { useState, useEffect } from "react";
import { Button, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [tweetsData, setTweetsData] = useState([]);

  const getTweets = async () => {
    const resp = await fetch('https://hidfzr.deta.dev/')
    const data = await resp.json();

    setTweetsData(data.data);
  }
  useEffect(() => {
    getTweets();
  }, [])

  

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 40, color: "orange" }}> Hola bebe </Text>
       {tweetsData.map(tweet  => (
         <View key={tweet.id}>
          <Text>{tweet.tweet_text}</Text>
          <Button
          title="Go to Details"
          onPress={() => navigation.navigate('FeedScreen', {
            id: tweet.id,
            user_id: tweet.user_id,
            tweet_text: tweet.tweet_text,
            tweet_date: tweet.tweet_date,
          })}
        />
        </View>
      ))
    }
  </View>
    
  );
  
};

export default HomeScreen;
