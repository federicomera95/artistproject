import axios from 'axios';
import { API_URL } from '../hooks/useFetch';

const getUserLinks = async (username, data) => {
    return await axios.get(`${API_URL}/contents/links/${username}`, data);
};

export default getUserLinks;
