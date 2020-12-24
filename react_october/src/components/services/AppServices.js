import React, {Component} from 'react';


class AppServices extends Component {
    baseUrl = 'https://swapi.dev/api/planets/';

   getAll () {
        return fetch(this.baseUrl)
           .then(response => response.json());

    }

    doFetch(url){
        return fetch(url)
            .then(response => response.json());

    }
}


export default AppServices;
