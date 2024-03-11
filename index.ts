interface IFilms {
    id: number;
    title: string;
    year: number;
    released: string;
    runtime: string;
    genre: string[];
    director: string;
    writer: string;
    actors: string[];
    plot: string;
    country: string;
    poster: string;
    imdbRating: number;
    imdbVotes: number;
    type: string;
    boxOffice: string;
    production: string;
}

const films: IFilms[] = [
    {
    id: 1,
    title: "Black Widow",
    year: 2021,
    released: "09 Jul 2021",
    runtime: "134 min",
    genre: ["Action", "Sci-Fi", "Adventure"],
    director: "Cate Shortland",
    writer: "Eric Pearson, Jac Schaeffer, Ned Benson",
    actors: ["Scarlett Johansson", "Florence Pugh", "David Harbour"],
    plot: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
    country: "United States",
    poster: "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    imdbRating: 6.9,
    imdbVotes: 121932,
    type: "movie",
    boxOffice: "$138,027,361",
    production: "Marvel Studios",
    },
    {
    id: 2,
    title: "Harry Potter and the Deathly Hallows: Part 2",
    year: 2011,
    released: "15 Jul 2011",
    runtime: "130 min",
    genre: ["Adventure", "Drama", "Fantasy"],
    director: "David Yates",
    writer: "Steve Kloves, J.K. Rowling",
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
    country: "United Kingdom, United States",
    poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    imdbRating: 8.1,
    imdbVotes: 790377,
    type: "movie",
    boxOffice: "$381,409,310",
    production: "Heyday Films, Moving Picture Company, Warner Bros.",
    },
    {
    id: 3,
    title: "Star Wars",
    year: 1977,
    released: "25 May 1977",
    runtime: "121 min",
    genre: ["Action", "Adventure", "Fantasy"],
    director: "George Lucas",
    writer: "George Lucas",
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vad",
    country: "United States, United Kingdom",
    poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    imdbRating: 8.6,
    imdbVotes: 1259440,
    type: "movie",
    boxOffice: "$460,998,507",
    production: "Lucasfilm Ltd.",
    },
    {
    id: 4,
    title: "Harry Potter and the Half-Blood Prince",
    year: 2009,
    released: "15 Jul 2009",
    runtime: "153 min",
    genre: ["Action", "Adventure", "Family"],
    director: "David Yates",
    writer: "Steve Kloves, J.K. Rowling",
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    plot: "As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as 'the property of the Half-Blood Prince' and begins to learn more about Lord Voldemort's dark past.",
    country: "United Kingdom",
    poster: "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg",
    imdbRating: 7.6,
    imdbVotes: 492245,
    type: "movie",
    boxOffice: "$302,305,431",
    production: "Heyday Films, Warner Bros.",
    },
    {
    id: 5,
    title: "Harry Potter and the Sorcerer's Stone",
    year: 2001,
    released: "16 Nov 2001",
    runtime: "152 min",
    genre: ["Adventure", "Family", "Fantasy"],
    director: "Chris Columbus",
    writer: "J.K. Rowling, Steve Kloves",
    actors: ["Daniel Radcliffe", "Rupert Grint", "Richard Harris"],
    plot: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
    country: "United Kingdom, United States",
    poster: "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
    imdbRating: 7.6,
    imdbVotes: 684604,
    type: "movie",
    boxOffice: "$318,087,620",
    production: "1492 Pictures, Heyday Films, Warner Brothers",
    }
]

/* Task 1 <-------> */

const genresArr = films.map(element => {
    return element.genre
})

let genres = genresArr.flat()
genres = genres.filter((el, index) => {
    return genres.indexOf(el) === index
})
console.log(genres)

/* Task 2 <-------> */

const actorsArr = films.map(element => {
    return element.actors
})

let actors = actorsArr.flat()
actors = actors.filter((el, index) => {
    return actors.indexOf(el) === index
})
console.log(actors)

/* Task 3 <-------> */

const rating = films.sort((a, b) => {
    return b.imdbRating - a.imdbRating
})
console.log(rating)

/* Task 4 <-------> */

interface IMovies {
    id: number;
    title: string;
    released: string;
    plot: string;
}

let movies: IMovies[] = films.reduce((acc, curr) => {
    let i: IMovies = {id : curr.id,
        title: curr.title,
        released: curr.released,
        plot: curr.plot
    }
    acc.push(i)
    return acc
}, [] as IMovies[])
console.log(movies)

/* Task 5 <-------> */

function filt(films: IFilms[], year: number) : IFilms[] {
    return films.filter((el) => {
        return el.year == year
    })
}
console.log(filt(films, 1977))

/* Task 6 <-------> */

function filterByName(films: IFilms[], substr: string) : IFilms[] {
    return films.filter((el) => {
        return el.title.includes(substr) 
    })
}
console.log(filterByName(films, 'Black'))

/* Task 7 <-------> */

function filterBy(films: IFilms[], substr: string) : IFilms[] {
    return films.filter((el) => {
        return el.title.includes(substr) || el.plot.includes(substr)
    })
}
console.log(filterBy(films, 'Black'))

/* Task 8 <-------> */

function abc<T>(arr: IFilms[], key: string, value: T) : IFilms[] { 
    return films.filter((el) => {
        if (isObjKey(key, el)) {
        return el[key] === value
        }
    })
}

function isObjKey<T>(key: PropertyKey, obj: IFilms): key is keyof T {
    return key in obj;
}

console.log(abc(films, 'runtime', '121 min'))
