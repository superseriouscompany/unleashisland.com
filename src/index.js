import React    from 'react';
import {render} from 'react-snapshot';
import App      from './App';
import ReactGA  from 'react-ga'
import './index.css';

if( !window.location.href.match(/localhost/) ) {
  ReactGA.initialize('UA-83917648-3');

  document.addEventListener("DOMContentLoaded", function() {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  });
}

render(
  <App />,
  document.getElementById('root')
);
