export default class AppServices {

         url = 'https://jsonplaceholder.typicode.com/posts';

         checkPost() {

        return fetch(this.url)
            .then(response => response.json())
            .then(valueAPI => valueAPI);
    }
}

