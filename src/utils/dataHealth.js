import { resolveFilmImage } from '../assets/filmImages'

export function inspectArchiveData({ films, people, companies }) {
  const personIds = new Set(people.map(person => person.id).filter(Boolean))
  const companyIds = new Set(companies.map(company => company.id).filter(Boolean))
  const issues = []
  const required = [
    ['缺少 id', film => !film.id], ['缺少中文片名', film => !film.titles?.zhHans], ['缺少年份', film => !film.release?.year],
    ['缺少制作公司', film => !film.production?.companies?.length], ['缺少导演', film => !film.credits?.director?.personId],
    ['缺少类型标签', film => !film.taxonomy?.genres?.length], ['缺少时代标签', film => !film.taxonomy?.eraTags?.length],
  ]
  films.forEach(film => { required.forEach(([label, invalid]) => { if (invalid(film)) issues.push({ label, record: film.id || '未命名影片' }) }); (film.relations?.people ?? []).forEach(id => { if (!personIds.has(id)) issues.push({ label: '无效人物关联', record: `${film.id}: ${id}` }) }); (film.production?.companies ?? []).forEach(company => { if (!companyIds.has(company.id)) issues.push({ label: '无效公司关联', record: `${film.id}: ${company.id}` }) }); if (!film.display?.poster || !resolveFilmImage(film.display.poster)) issues.push({ label: '缺少海报', record: film.id }); if (!film.display?.cover || !resolveFilmImage(film.display.cover)) issues.push({ label: '缺少封面', record: film.id }) })
  people.forEach(person => { if (!person.id) issues.push({ label: '人物缺少 id', record: person.name || '未命名人物' }) })
  return { totals: { films: films.length, people: people.length, companies: companies.length }, issues }
}
