import { resolveFilmImage } from '../assets/filmImages'

const checks = [
  ['基础资料', film => Boolean(film.titles?.zhHans && film.titles?.en && film.release?.year && film.production?.companies?.length)],
  ['导演', film => Boolean(film.credits?.director?.personId)], ['演员', film => Boolean(film.credits?.cast?.length)],
  ['类型', film => Boolean(film.taxonomy?.genres?.length)], ['时代标签', film => Boolean(film.taxonomy?.eraTags?.length)],
  ['历史简介', film => Boolean(film.archive?.synopsis)], ['档案评分', film => Boolean(film.archive?.rating)],
  ['海报', film => Boolean(film.display?.poster && resolveFilmImage(film.display.poster))], ['封面', film => Boolean(film.display?.cover && resolveFilmImage(film.display.cover))],
  ['人物关联', film => Boolean(film.relations?.people?.length)], ['公司关联', film => Boolean(film.production?.companies?.length)], ['展览关联', film => Boolean(film.relations?.exhibitions?.length)],
  ['剧照', film => Boolean(film.display?.stills?.length)], ['云端资源', film => film.collection?.cloud?.status === 'available'], ['NAS收藏', film => Boolean(film.collection?.nas?.exists)], ['蓝光版本', film => Boolean(film.collection?.physical?.type)], ['观看记录', film => Boolean(film.watchHistory?.length)],
]

export function getArchiveCompleteness(film) { const items = checks.map(([label, test]) => ({ label, complete: test(film) })); const completed = items.filter(item => item.complete); return { percent: Math.round((completed.length / items.length) * 100), completed, missing: items.filter(item => !item.complete) } }
