import { Link } from 'react-router-dom'

export default function EraOverview({ exhibitions }) { return <div className="era-overview">{exhibitions.map(exhibition => <Link key={exhibition.id} to={`/exhibition/${exhibition.id}`}><small>{exhibition.period}</small><strong>{exhibition.title}</strong><span>{exhibition.summary}</span></Link>)}</div> }
