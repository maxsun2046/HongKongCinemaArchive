import FilmCard from './FilmCard'

export default function RecentArchives({ films }) { return <div className="recent-archives">{films.slice(-3).reverse().map(film => <FilmCard key={film.id} film={film} />)}</div> }
