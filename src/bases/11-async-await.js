const getImagen = async () => {

    try {
        const apiKey = 'nnf90kUoJAbaBM90YzdM0b6PVEUJzD2B';

        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

        const data = await resp.json();

        const {url} = data.data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

    } catch (error){
        // manejo de errores
        console.error(error);
    }

};


getImagen();
