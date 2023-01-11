import React from 'react';
import './App.css';
import {io} from "socket.io-client";

const socket = io('http://localhost:9000')

export const App =() => {
  return (
    <div className="App">
      HELLO
    </div>
  );
}

