import { resolveFilmImage } from '../assets/filmImages'

export default function Poster({ film, large = false }) {
  const poster = resolveFilmImage(film.display.poster)

  return (
    <div className={`poster poster--${film.display.posterColor} ${poster ? 'poster--image' : ''} ${large ? 'poster--large' : ''}`} aria-label={`${film.titles.zhHans} 海报`}>
      {poster && <img className="poster__image" src={poster} alt="" />}
      <span className="poster__series">HONG KONG / ARCHIVE</span>
      <div className="poster__rule" />
      <strong>{film.titles.zhHans}</strong>
      <em>{film.titles.en}</em>
      <span className="poster__year">{film.release.year}</span>
    </div>
  )
}
