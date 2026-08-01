import { Link } from 'react-router-dom'

export default function ExhibitionTimeline({ timeline }) {
  return <section className="exhibition-detail__section">
    <p>时间线</p>
    <div className="exhibition-timeline">
      {timeline.map(({ year, event, filmId, title, description, status }) => { const archived = status === 'archived' || (!status && Boolean(filmId)); return <article className={`timeline-item timeline-item--${archived ? 'archived' : 'planned'}`} key={`${year}-${event}`}><time>{year}</time><div>{archived && filmId ? <Link to={`/movies/${filmId}`}>{title ?? event}</Link> : <strong>{title ?? event}</strong>}<small className="timeline-status">{archived ? '✓ 已入馆' : '○ 待编目'}</small>{description && <small>{description}</small>}</div></article> })}
    </div>
  </section>
}
