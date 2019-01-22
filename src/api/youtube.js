import axios from 'axios';

const KEY = "AIzaSyAHtOiZbmlnFo9bANci35sR026jaaNmTtk";

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})