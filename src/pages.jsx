import { Link, useParams } from 'react-router-dom'
import films from './data/films.json'
import FilmCard from './components/FilmCard'
import MovieCatalog from './components/MovieCatalog'
import Poster from './components/Poster'
import ArchiveDetailSections from './components/ArchiveDetailSections'
import WatchHistory from './components/WatchHistory'
import CollectionResources from './components/CollectionResources'
import ArchiveCompleteness from './components/ArchiveCompleteness'
import CompanyLinks from './components/CompanyLinks'
import { resolveFilmImage } from './assets/filmImages'
import people from './data/people.json'
import companies from './data/companies.json'
import exhibitions from './data/exhibitions.json'
import DataHealthCheck from './components/DataHealthCheck'
import ExhibitionTimeline from './components/ExhibitionTimeline'
import ExhibitionPeople from './components/ExhibitionPeople'
import ExhibitionCompanies from './components/ExhibitionCompanies'
import ExhibitionFilms from './components/ExhibitionFilms'
import ExhibitionGallery from './components/ExhibitionGallery'
import ExhibitionCompleteness from './components/ExhibitionCompleteness'
import ExhibitionCreators from './components/ExhibitionCreators'
import ExhibitionBackground from './components/ExhibitionBackground'
import ArchiveStatistics from './components/ArchiveStatistics'
import EraOverview from './components/EraOverview'
import RecentArchives from './components/RecentArchives'
import MyCollectionStats from './components/MyCollectionStats'

const eras = [
  ['01', 'bruce_lee_era', '1971—1973', '李小龙时代', 'Bruce Lee Era', '功夫电影走向世界的起点。'],
  ['02', 'golden_harvest_80s', '1980—1989', '嘉禾黄金十年', 'Golden Harvest', '香港类型片的黄金年代。'],
  ['03', 'hong_kong_new_wave', '1980—1997', '香港新浪潮', 'Hong Kong New Wave', '重新观看城市与人。'],
  ['04', 'stephen_chow_era', '1989—2000', '周星驰时代', 'Stephen Chow Era', '喜剧成为共同语言。'],
]

export function Home() {
  return <><section className="hero"><div><h1>香港电影<br /><i>档案馆</i></h1><p>保存香港电影的片名、影像与观看线索。</p><Link className="text-link" to="/movies">浏览馆藏 <span>→</span></Link></div><div className="hero-film"><span>35 MM</span><b>HONG KONG<br />IN MOTION</b><em>1971 — 2000</em></div></section><section className="section archive-hall"><div className="section-heading"><p>档案馆收藏</p><h2>正在生长的馆藏</h2></div><ArchiveStatistics films={films} people={people} companies={companies} exhibitions={exhibitions} /><MyCollectionStats films={films} /></section><section className="section"><div className="section-heading"><p>时代脉络</p><h2>银幕章节</h2></div><EraOverview exhibitions={exhibitions} /></section><section className="section recent-section"><div className="section-heading"><p>近期入馆</p><h2>最近整理</h2></div><RecentArchives films={films} /></section><FilmRail title="馆藏精选" films={films} /></>
}

export function Movies() { return <section className="section page"><div className="section-heading"><p>全部馆藏</p><h1>电影目录</h1><span>共 {films.length} 部</span></div><MovieCatalog films={films} /></section> }

export function PersonDetail() { const { id } = useParams(); const person = people.find(item => item.id === id); if (!person) return <section className="section page"><h1>未找到该人物</h1></section>; const filmography = films.filter(film => person.films.includes(film.id)); return <section className="section page person-detail"><p className="detail__kicker">人物档案</p><h1>{person.name}</h1><h2>{person.englishName}</h2><div className="tag-list">{person.roles.map(role => <span key={role}>{role}</span>)}<span>{person.era}</span></div><p className="synopsis">{person.summary}</p><section className="archive-section"><p>代表电影</p><div className="person-films">{filmography.map(film => <Link key={film.id} to={`/movies/${film.id}`}>{film.titles.zhHans}<small>{film.release.year} · {film.titles.en}</small></Link>)}</div></section></section> }

export function CompanyDetail() { const { id } = useParams(); const company = companies.find(item => item.id === id); if (!company) return <section className="section page"><h1>未找到该公司</h1></section>; const representatives = films.filter(film => company.films.includes(film.id)); const keyPeople = people.filter(person => company.people.includes(person.id)); return <section className="section page person-detail"><p className="detail__kicker">公司档案 · 成立于 {company.founded}</p><h1>{company.name}</h1><h2>{company.englishName}</h2><div className="tag-list"><span>{company.era}</span></div><p className="synopsis">{company.summary}</p><section className="archive-section"><p>重要人物</p><div className="tag-list">{keyPeople.map(person => <Link className="company-link" key={person.id} to={`/person/${person.id}`}>{person.name}</Link>)}</div></section><section className="archive-section"><p>代表电影</p><div className="person-films">{representatives.map(film => <Link key={film.id} to={`/movies/${film.id}`}>{film.titles.zhHans}<small>{film.release.year} · {film.titles.en}</small></Link>)}</div></section></section> }

export function AdminCheck() { return <DataHealthCheck films={films} people={people} companies={companies} /> }

export function FilmDetail() { const { id } = useParams(); const film = films.find(item => item.id === id); if (!film) return <section className="section page"><h1>未找到该影片</h1><Link className="text-link" to="/movies">返回电影目录</Link></section>; const cover = resolveFilmImage(film.display.cover); return <><section className="film-cover">{cover && <img src={cover} alt="" />}<div className="film-cover__content"><p>{film.release.year} · <CompanyLinks companies={film.production.companies} /></p><h1>{film.titles.zhHans}</h1><span>{film.titles.en}</span></div></section><section className="detail"><Poster film={film} large /><article><p className="detail__kicker">{film.release.year} · <CompanyLinks companies={film.production.companies} /></p><h1>{film.titles.zhHans}</h1><h2>{film.titles.en}</h2><div className="score"><span>档案评分</span><b>{film.archive.rating.toFixed(1)}</b><i>/ 10</i></div><ArchiveCompleteness film={film} /><p className="synopsis">{film.archive.synopsis}</p><CollectionResources collection={film.collection} /><WatchHistory entries={film.watchHistory} /><ArchiveDetailSections film={film} /></article></section></> }

export function Exhibitions() { return <section className="section page"><div className="section-heading"><p>策展专题</p><h1>展览</h1></div><div className="exhibition-list">{exhibitions.map((exhibition, index) => <Link className="exhibition-list__item" key={exhibition.id} to={`/exhibition/${exhibition.id}`}><span>{String(index + 1).padStart(2, '0')}</span><div><p>{exhibition.period}</p><h2>{exhibition.title}</h2><small>{exhibition.summary}</small></div><b>↗</b></Link>)}</div></section> }

export function ExhibitionDetail() { const { id } = useParams(); const exhibition = exhibitions.find(item => item.id === id); if (!exhibition) return <section className="section page"><h1>未找到该展览</h1><Link className="text-link" to="/exhibitions">返回展览</Link></section>; const peopleById = new Map(people.map(person => [person.id, person])); const companiesById = new Map(companies.map(company => [company.id, company])); const exhibitionPeople = (exhibition.keyPeople ?? exhibition.people ?? []).map(personId => peopleById.get(personId)).filter(Boolean); const exhibitionCreators = (exhibition.creatorPeople ?? []).map(personId => peopleById.get(personId)).filter(Boolean); const exhibitionCompanies = (exhibition.keyCompanies ?? []).map(companyId => companiesById.get(companyId)).filter(Boolean); const exhibitionFilms = (exhibition.films ?? []).map(filmId => films.find(film => film.id === filmId)).filter(Boolean); return <section className="section page exhibition-detail"><p className="detail__kicker">数字电影展厅</p><h1>{exhibition.title}</h1><h2>{exhibition.englishTitle}</h2><div className="exhibition-detail__meta"><span>{exhibition.period}</span>{exhibition.status === 'active' && <small>历史展厅</small>}{(exhibition.keywords ?? []).map(keyword => <small key={keyword}>{keyword}</small>)}</div><ExhibitionCompleteness exhibition={exhibition} films={exhibitionFilms} /><section className="exhibition-intro"><p>{exhibition.intro ?? exhibition.summary}</p>{exhibition.background && <div><small>历史背景</small><span>{exhibition.background}</span></div>}{exhibition.significance && <div><small>文化意义</small><span>{exhibition.significance}</span></div>}</section><ExhibitionBackground period={exhibition.period} items={exhibition.industryHighlights} /><ExhibitionCreators people={exhibitionCreators} pending={exhibition.pendingCreators} /><ExhibitionTimeline timeline={exhibition.timeline} /><ExhibitionGallery films={exhibitionFilms} /><ExhibitionPeople people={exhibitionPeople} /><ExhibitionCompanies companies={exhibitionCompanies} /><ExhibitionFilms films={exhibitionFilms} /></section> }

export function Collection() { const groups = [['云端资源', '数字修复、流媒体与研究资料的可访问目录。', '032'], ['NAS收藏', '本地高码率片源、字幕与个人观影笔记。', '087'], ['蓝光收藏', '实体载体、特别版与装帧信息的收藏清单。', '041']]; return <section className="section page"><div className="section-heading"><p>私人藏品</p><h1>收藏</h1></div><div className="collection-list">{groups.map(group => <article key={group[0]}><div><p>{group[2]} 项</p><h2>{group[0]}</h2><small>{group[1]}</small></div><span>查看目录 →</span></article>)}</div></section> }

function FilmRail({ title, films: items }) { return <section className="section rail"><div className="section-heading"><p>编目精选</p><h2>{title}</h2><Link className="text-link" to="/movies">全部电影 <span>→</span></Link></div><div className="film-grid">{items.slice(0, 4).map(film => <FilmCard key={film.id} film={film} />)}</div></section> }
