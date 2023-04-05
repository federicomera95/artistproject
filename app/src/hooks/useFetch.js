import { useEffect, useState } from 'react';
import axios from 'axios';

export const API_URL = 'http://localhost:3001/api';

const useFetch = (path, options = {}) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoad] = useState(false);

    const fetch = async () => {
        const controller = new AbortController();

        setError(null);
        setData(null);
        setLoad(true);

        try {
            const _data = await axios({
                method: 'GET',
                url: `${API_URL}${path}`,
                signal: controller.signal,
                ...options
            });
            setData(_data);
        } catch (err) {
            console.error(err);
            setError(true);
        } finally {
            setLoad(false);
            controller.abort();
        }
    };

    useEffect(() => {
        fetch();
    }, []);

    return [data, loading, error, fetch];
};

export default useFetch;
