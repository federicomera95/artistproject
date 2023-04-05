import axios from 'axios';
import { API_URL } from '../hooks/useFetch';

const getUser = async (username, data) => {
    return await axios.get(`${API_URL}/profile/${username}`, data);
};

export default getUser;
