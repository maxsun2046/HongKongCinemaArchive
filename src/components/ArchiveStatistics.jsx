import { getArchiveStatistics } from '../utils/archiveStatistics'

export default function ArchiveStatistics({ films, people, companies, exhibitions }) {
  const stats = getArchiveStatistics({ films, people, companies, exhibitions })
  return <section className="archive-statistics"><div><small>电影</small><strong>{stats.films}</strong></div><div><small>人物</small><strong>{stats.people}</strong></div><div><small>公司</small><strong>{stats.companies}</strong></div><div><small>展厅</small><strong>{stats.exhibitions}</strong></div></section>
}
