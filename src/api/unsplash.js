import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID e7c1f3e22c59436ef4689df33a587ffe1b74c2e1b2f4d29d654da0beada6b86a'
    }
});