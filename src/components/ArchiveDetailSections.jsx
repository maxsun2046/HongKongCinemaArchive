import PersonLinks from './PersonLinks'

const exhibitionNames = {
  bruce_lee_era: '李小龙时代',
  golden_harvest_80s: '嘉禾黄金十年',
}

export default function ArchiveDetailSections({ film }) {
  const companies = film.production.companies.map(company => company.name)
  const exhibitions = film.relations.exhibitions.map(id => exhibitionNames[id] ?? id)

  return <div className="archive-sections">
    <section className="archive-section"><p>编目标签</p><div className="tag-list">{[...film.taxonomy.genres, ...film.taxonomy.eraTags, ...companies].map(tag => <span key={tag}>{tag}</span>)}</div></section>
    <section className="archive-section"><p>创作人员</p><div className="people-grid"><div><small>导演</small><strong><PersonLinks people={[film.credits.director]} /></strong></div><div><small>主演</small><strong><PersonLinks people={film.credits.cast} /></strong></div></div></section>
    <section className="archive-section"><p>所属展览</p><div className="exhibition-tags">{exhibitions.map(name => <span key={name}>{name}</span>)}</div></section>
  </div>
}
