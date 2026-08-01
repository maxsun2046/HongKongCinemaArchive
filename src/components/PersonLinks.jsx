import { Link } from 'react-router-dom'

export default function PersonLinks({ people }) { return <>{people.map(person => <Link className="person-link" key={person.personId} to={`/person/${person.personId}`}>{person.name}</Link>)}</> }
