"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBgsow1ilciXuIhNZq33uwEs12VQRI7yPw';

YTSearch({key: API_KEY, term: 'surfboards'}, function(response){
    console.log(response);
});

// Create a new component. This component should produce some HTML

const App = () => (
    <div>
        <SearchBar/>
    </div>
);

// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
