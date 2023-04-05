import axios from 'axios';
import { API_URL } from '../hooks/useFetch';

const signin = async (data) => {
    return await axios.post(`${API_URL}/auth/signin`, data);
};

export default signin;
