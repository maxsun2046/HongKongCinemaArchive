import { Link } from 'react-router-dom'

export default function CompanyLinks({ companies }) { return <>{companies.map(company => <Link className="company-link" key={company.id} to={`/company/${company.id}`}>{company.name}</Link>)}</> }
