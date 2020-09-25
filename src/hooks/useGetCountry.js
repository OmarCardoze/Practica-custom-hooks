import { useState, useEffect } from 'react'
import GetCountry from '../helpers/GetCountry';


export const useGetCountry = (continent) => {

    const [state, setstate] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        GetCountry(continent)
            .then(contries => (
                setstate({
                    data: contries,
                    loading: false
                })
            ))
    }, [continent])

    return state;
}