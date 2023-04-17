import { useEffect, useState } from 'react';
import axios from 'axios';

export const API_URL = 'http://localhost:3001/api';

const useFetch = (path, options = {}) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoad] = useState(false);

    const controller = new AbortController();

    const fetch = async () => {
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
        }
    };

    useEffect(() => {
        fetch();

        return () => controller.abort();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [data, loading, error, fetch];
};

export default useFetch;
