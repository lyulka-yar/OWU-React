import React, {Component} from 'react';

class UserServices extends Component {
url = 'https://jsonplaceholder.typicode.com/users';

   getAllUsers() {
        return fetch(this.url)
            .then(response => response.json())
            .then(users => users);
    }
}

export default UserServices;