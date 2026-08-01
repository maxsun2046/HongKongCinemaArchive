import { Link } from 'react-router-dom'

export default function ExhibitionPeople({ people }) {
  return <section className="exhibition-detail__section">
    <p>核心人物</p>
    {people.length ? <div className="exhibition-people">{people.map(person => <Link key={person.id} to={`/person/${person.id}`}><div className="person-avatar">{person.image ? <img src={person.image} alt="" /> : person.name.slice(0, 1)}</div><strong>{person.name}</strong><small>{person.englishName}</small><span>{person.roles.join(' · ')}</span></Link>)}</div> : <EmptyState />}
  </section>
}

function EmptyState() { return <small className="exhibition-empty">相关人物档案正在整理。</small> }
