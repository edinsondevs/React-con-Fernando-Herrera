import { useEffect, useState } from "react"

const localCache = {}


export const useFetch = (url) =>
{


    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    })


    const setLoadingState = () => ({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    })
    useEffect(() =>
    {
        getFetch()
    }, [url])

    const getFetch = async () =>
    {

        if (localCache[url])
        {
            console.log('usando cache')
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            })
            return
        };
        setLoadingState()
        const res = await fetch(url)
        await new Promise((res) => setTimeout(res, 1500));
        // const res = await fetch('https://bymykel.github.io/CSGO-API/api/es-ES/stickers.json')
        if (!res.ok)
        {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: res.status,
                    message: res.statusText
                }
            })
            return;
        }
        const data = await res.json();
        setState({
            data: data,
            isLoading: false,
            hasError: false,
        })

        // Manejo del Cache
        localCache[url] = data;
    }


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}
