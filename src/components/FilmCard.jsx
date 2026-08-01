import { Link } from 'react-router-dom'
import Poster from './Poster'
import ArchiveCompleteness from './ArchiveCompleteness'

export default function FilmCard({ film }) {
  return <Link className="film-card" to={`/movies/${film.id}`}>
    <Poster film={film} />
    <div className="film-card__meta"><span>{film.release.year} · {film.production.companies.map(company => company.name).join(' / ')}</span><b>{film.archive.rating.toFixed(1)}</b></div><ArchiveCompleteness film={film} compact />
    <h3>{film.titles.zhHans}</h3><p>{film.titles.en}</p>
  </Link>
}
