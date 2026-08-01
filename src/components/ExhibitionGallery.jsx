import { Link } from 'react-router-dom'

export default function ExhibitionGallery({ films }) {
  const stills = films.flatMap(film => (film.display.stills ?? []).map((src, index) => ({ film, src, index })))
  return <section className="exhibition-detail__section"><p>展厅影像</p>{stills.length ? <div className="exhibition-gallery">{stills.map(({ film, src, index }) => <Link key={`${film.id}-${src}`} to={`/movies/${film.id}`}><img src={src} alt={`${film.titles.zhHans} 剧照 ${index + 1}`} /><span>{film.titles.zhHans}</span></Link>)}</div> : <div className="exhibition-gallery exhibition-gallery--empty">{films.map(film => <Link key={film.id} to={`/movies/${film.id}`}><span>{film.release.year}</span><strong>{film.titles.zhHans}</strong><small>剧照待整理</small></Link>)}</div>}</section>
}
