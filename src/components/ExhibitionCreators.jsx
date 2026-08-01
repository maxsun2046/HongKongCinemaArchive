import { Link } from 'react-router-dom'

export default function ExhibitionCreators({ people, pending = [] }) {
  return <section className="exhibition-detail__section"><p>核心创作团队</p><div className="exhibition-creators">{people.map(person => <Link key={person.id} to={`/person/${person.id}`}><strong>{person.name}</strong><small>{person.englishName}</small><span>{person.roles.join(' / ')}</span></Link>)}{pending.map(name => <div className="creator-pending" key={name}><strong>{name}</strong><small>人物档案待建</small></div>)}</div></section>
}
