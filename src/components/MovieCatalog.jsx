import { useMemo, useState } from 'react'
import FilmCard from './FilmCard'

const allValue = '全部'

function unique(values) { return [...new Set(values)].sort() }

export default function MovieCatalog({ films }) {
  const [query, setQuery] = useState('')
  const [year, setYear] = useState(allValue)
  const [company, setCompany] = useState(allValue)
  const [genre, setGenre] = useState(allValue)
  const [era, setEra] = useState(allValue)
  const [resource, setResource] = useState(allValue)
  const options = useMemo(() => ({ years: unique(films.map(film => String(film.release.year))), companies: unique(films.flatMap(film => film.production.companies.map(item => item.name))), genres: unique(films.flatMap(film => film.taxonomy.genres)), eras: unique(films.flatMap(film => film.taxonomy.eraTags)) }), [films])
  const results = useMemo(() => { const needle = query.trim().toLowerCase(); return films.filter(film => { const searchable = [film.titles.zhHans, film.titles.en, film.credits.director.name, ...film.credits.cast.map(person => person.name), ...film.production.companies.map(item => item.name)].join(' ').toLowerCase(); const hasResource = resource === allValue || (resource === 'cloud' && film.collection.cloud.status === 'available') || (resource === 'nas' && film.collection.nas.exists) || (resource === 'physical' && Boolean(film.collection.physical.type)) || (resource === 'watched' && Boolean(film.watchHistory?.length)); return (!needle || searchable.includes(needle)) && (year === allValue || String(film.release.year) === year) && (company === allValue || film.production.companies.some(item => item.name === company)) && (genre === allValue || film.taxonomy.genres.includes(genre)) && (era === allValue || film.taxonomy.eraTags.includes(era)) && hasResource }) }, [films, query, year, company, genre, era, resource])
  return <><div className="catalog-controls"><input value={query} onChange={event => setQuery(event.target.value)} placeholder="搜索片名、导演、演员或公司" aria-label="搜索电影" />{[[year, setYear, options.years, '年份'], [company, setCompany, options.companies, '公司'], [genre, setGenre, options.genres, '类型'], [era, setEra, options.eras, '时代标签'], [resource, setResource, [['cloud','有云端资源'],['nas','有 NAS 收藏'],['physical','有实体收藏'],['watched','已观看']], '资源状态']].map(([value, setValue, values, label]) => <select key={label} aria-label={label} value={value} onChange={event => setValue(event.target.value)}><option value={allValue}>全部{label}</option>{values.map(item => <option key={Array.isArray(item)?item[0]:item} value={Array.isArray(item)?item[0]:item}>{Array.isArray(item)?item[1]:item}</option>)}</select>)}</div><p className="catalog-count">显示 {results.length} 部影片</p><div className="film-grid">{results.map(film => <FilmCard key={film.id} film={film} />)}</div></>
}
