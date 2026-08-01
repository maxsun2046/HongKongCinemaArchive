import FilmCard from './FilmCard'

export default function ExhibitionFilms({ films }) {
  return <section className="exhibition-detail__section">
    <p>代表电影</p>
    {films.length ? <div className="film-grid exhibition-films">{films.map(film => <FilmCard key={film.id} film={film} />)}</div> : <small className="exhibition-empty">代表电影正在编目。</small>}
  </section>
}
