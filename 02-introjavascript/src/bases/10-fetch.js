//fetch api

const apiKey = process.env.REACT_APP_api_key;

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then( res => res.json() )
    .then( ({data}) => {
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    })
    .catch(console.warn);