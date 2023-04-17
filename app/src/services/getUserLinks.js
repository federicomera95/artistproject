import axios from 'axios';
import { API_URL } from '../hooks/useFetch';

const getUserLinks = async (data) => {
    return await axios.get(`${API_URL}/contents/links`, data);
};

export default getUserLinks;
