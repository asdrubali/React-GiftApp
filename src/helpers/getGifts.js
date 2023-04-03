
export const getGifts = async( category ) =>{

    const url = `https://api.giphy.com/v1/gifs/search?limit=10&api_key=nlZx4i35cgCGDdOQNFP3RFIcAAZ6Jnks&q=${category}`;
    const res = await fetch( url )
    const { data } = await res.json();

    const gifts = data.map( img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return(gifts)
}