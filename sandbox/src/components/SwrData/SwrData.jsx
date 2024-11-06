import useSWR from 'swr';

async function fetcher() {
    const response = await("", {
        method: 'get',
        headers: {
            "Accept": "application/json",
        },
    });

    if(!response.ok){
        throw new Error("fetch error " + response.status);
    }

    return response.json();
}

export default function SwrData(){

    const { data, error, isLoading } = useSWR(
        '/api/user/123', //УРЛ откуда загружаются данные
        fetcher
    )
 
    if (error) 
        return <div>ошибка загрузки</div>
    if (isLoading) 
        return <div>загрузка...</div>

    return(
        <div className="Swr-data">
            swr {data}
        </div>
    );
}