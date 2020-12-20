
export const getGifs = async(query) => {
    const api_key = 'osnHAL3DoKnd9xFBtc72aUboCfVWGznZ';
    const endPoint = 'https://api.giphy.com/v1/gifs/search'
    const url = `${endPoint}?api_key=${api_key}&q=${query}&limit=10`;
    const res = await fetch(url);
    const {data} = await res.json();
    const gifs = data.map( ({id,title,images:{downsized_medium}}) =>{
        return({
            id: id,
            title: title.trim() !== ''? title:'Gif',
            url: downsized_medium?.url
        })
    });
    return gifs;
    
}
 
