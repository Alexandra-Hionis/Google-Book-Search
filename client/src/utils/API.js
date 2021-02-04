
import axios from 'axios';

export default {
    getData: () => axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+APIKey+"&maxResults=50")
}