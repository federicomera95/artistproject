import { useState } from 'react';

const axios = require('axios');

const useFetch = (url, options = { method: 'GET', data: {} }) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [load, setLoad] = useState(false);

    const fetch = async () => {
        const controller = new AbortController();

        setError(null);
        setData(null);
        setLoad(true);

        try {
            const _data = await axios({
                url,
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
    return [error, data, load, fetch];
};

export default useFetch;
