import { useState } from 'react';

const axios = require('axios');

const useFetch = (url, options = { method: 'GET', data: {} }) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [load, setLoad] = useState(false);

    const fetch = async () => {
        setError(null);
        setData(null);
        setLoad(true);
        try {
            const _data = await axios({
                url,
                ...options
            });
            setData(_data);
        } catch (err) {
            console.log(err);
            setError(true);
        } finally {
            setLoad(false);
        }
    };
    return [error, data, load, fetch];
};

export default useFetch;
