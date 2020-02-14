import axios from 'axios';
import frontURL from './constants';

const axiosApi = axios.create({
   baseURL: frontURL
});