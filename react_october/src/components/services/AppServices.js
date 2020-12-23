import React, {Component} from 'react';


class AppServices extends Component {
    url = 'https://swapi.dev/api/planets/';

   async getAll () {
        return await fetch(this.url)
           .then(response => response.json());

    }
}

export default AppServices;