

const Movie = ({id, title, director, pubDate }) =>{
    return(
        <div>
            <h1>{title.replace(/<b>/gi,"").replace(/<\/b>/gi,"")}({pubDate}) - {director}</h1>
        </div>
    );
}

export default Movie;