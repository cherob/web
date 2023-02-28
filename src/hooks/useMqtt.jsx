// This is a custom hook that is used to connect to an MQTT broker and subscribe to a topic. It also handles publishing messages to the topic. This hook is used in the Chat component in the Chat feature.

import { useState, useEffect } from 'react';
import mqtt from 'mqtt';

const useMqtt = (topic) => {
  const [client, setClient] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const client = mqtt.connect('ws://localhost:9001', {
      clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8)
    });

    console.log('Connecting to MQTT broker...');
    console.log('client: ', client)


    client.on('connect', () => {
      console.log('Connected to MQTT broker');
      client.subscribe(topic);
    });

    client.on('message', (topic, message) => {
      console.log(`Message received on topic "${topic}": ${message.toString()}`);
      setMessage(message.toString());
    });

    client.on('error', (error) => {
      console.log('Error connecting to MQTT broker:', error);
    });

    client.on('close', () => {
      console.log('Disconnected from MQTT broker');
    });

    client.on('offline', () => {
      console.log('MQTT broker is offline');
    });

    setClient(client);

    return () => {
      client.end();
    }
  }, [topic]);

  const publish = (topic, message) => {
    client.publish(topic, message);
  }

  return { message, publish };
}

export default useMqtt;