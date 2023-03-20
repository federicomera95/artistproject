import { useState } from 'react';

const axios = require('axios');

const useFetch = (url, options = { method: 'GET', data: {} }) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [load, setLoad] = useState(false);

    const fetchHook = async () => {
        setError(null);
        setData(null);
        try {
            setLoad(true);
            const _data = await axios({
                url,
                ...options
            });
            setData(_data);
        } catch (err) {
            console.log(err);
            setError("Something went wrong");
        } finally {
            setLoad(false);
        }
    };
    return [error, data, load];
};

export default useFetch;