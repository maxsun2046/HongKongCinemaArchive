import { Link } from 'react-router-dom'

export default function ExhibitionCompanies({ companies }) {
  return <section className="exhibition-detail__section">
    <p>相关公司</p>
    {companies.length ? <div className="exhibition-companies">{companies.map(company => <Link key={company.id} to={`/company/${company.id}`}><strong>{company.name}</strong><small>{company.englishName} · {company.founded}</small></Link>)}</div> : <small className="exhibition-empty">相关公司档案正在整理。</small>}
  </section>
}
