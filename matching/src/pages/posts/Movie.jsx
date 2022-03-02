

const Movie = ({id, title, director, pubDate }) =>{
    return(
        <div>
            <h3>{title.replace(/<b>/gi,"").replace(/<\/b>/gi,"")}({pubDate}) - {director}</h3>
        </div>
    );
}

export default Movie;