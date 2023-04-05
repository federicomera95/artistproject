import axios from 'axios';
import { API_URL } from '../hooks/useFetch';

const login = async (data) => {
    return await axios.put(`${API_URL}/auth/login`, data);
};

export default login;
