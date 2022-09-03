import { useEffect, useState } from 'react';
import axios from '../api/axios';
import {auth} from "../auth/auth"

const useFetch = (url, state, admin) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get(`${url}`, admin && auth())
            .then(res => {
                setData(res.data);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
            })
    }, [url, state])

    return {data, loading}
}
export default useFetch