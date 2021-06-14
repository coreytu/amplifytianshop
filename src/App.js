import React from 'react';
import logo from './logo.svg';
import './App.css';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';


Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <AmplifySignOut />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Tian's Shopee Store ERP </h1>
      </header>
    </div>
  );
}

export default withAuthenticator(App);