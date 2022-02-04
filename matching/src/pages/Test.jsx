import { useState,useEffect } from "react";

const Test = () => {
    const [movies,setMovies] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(async () =>{
        const json = await(await fetch('http://127.0.0.1:8000/movie/search')).json();

        setMovies(json);
        setLoading(false);
    },[]);

    console.log(movies);

    return(
        <div>
            {loading? <h1>Loading...</h1>: (<div>
                {movies.map(item => (
                    <div>
                        <h1>{item.movie_title}({item.movie_pubDate}) - {item.movie_director}</h1>
                        <img src={item.movie_imgae} alt={item.movie_title}/>
                    </div>
                ))}
            </div>)}
        </div>
        );
    
};

export default Test;