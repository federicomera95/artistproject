import axios from 'axios';
import { API_URL } from '../hooks/useFetch';

const logout = async (data) => {
    return await axios.put(`${API_URL}/auth/logout`, data);
};

export default logout;
