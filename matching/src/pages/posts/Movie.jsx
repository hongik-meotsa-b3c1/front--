

const Movie = ({id, title, director, pubDate }) =>{
    return(
        <div>
            <h1>{title}({pubDate}) - {director}</h1>
        </div>
    );
}

export default Movie;