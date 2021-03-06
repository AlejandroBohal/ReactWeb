//Async

// const getImagenPromesa = () => new Promise( resolve => resolve('https://hola.com') );
// getImagenPromesa().then(console.log);

const getImage = async() => 'https://hola.com';
getImage().then(console.log);

// Para trabajar dentro de un await necesitamos un async
const getImagen = async() =>{
    try{
        const apiKey = process.env.REACT_APP_api_key;
        const res = await fetch(`${process.env.REACT_APP_giphyHost}/random?api_key=${apiKey}`);
        const {data} = await res.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    }catch(error){
        console.error(error);
    }
}
getImagen();
