
export default async function apiCall(conf) {
    const {url,method = "get",body,headers} = conf;
    try
    {
       
        const response = await fetch(url,
        {
            method,
            body,
            headers,
        } )
        return  response.json();
            
    }
    catch(err){Promise.reject(err)}
}
