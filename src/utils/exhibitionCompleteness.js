const checks = [
  ['展厅标题', exhibition => Boolean(exhibition.title)],
  ['英文标题', exhibition => Boolean(exhibition.englishTitle)],
  ['时期', exhibition => Boolean(exhibition.period)],
  ['展览简介', exhibition => Boolean(exhibition.summary)],
  ['展览导语', exhibition => Boolean(exhibition.intro)],
  ['历史背景', exhibition => Boolean(exhibition.background)],
  ['文化意义', exhibition => Boolean(exhibition.significance)],
  ['时间线', exhibition => Array.isArray(exhibition.timeline)],
  ['时间线事件', exhibition => Boolean(exhibition.timeline?.length)],
  ['核心人物', exhibition => Boolean(exhibition.keyPeople?.length)],
  ['相关公司', exhibition => Boolean(exhibition.keyCompanies?.length)],
  ['代表电影', exhibition => Boolean(exhibition.films?.length)],
  ['展厅图片', exhibition => Boolean(exhibition.images?.length)],
  ['电影剧照', (_, films) => films.some(film => film.display?.stills?.length)],
]

export function getExhibitionCompleteness(exhibition, films = []) {
  const items = checks.map(([label, test]) => ({ label, complete: test(exhibition, films) }))
  const completed = items.filter(item => item.complete)
  return { percent: Math.round((completed.length / items.length) * 100), completed, missing: items.filter(item => !item.complete) }
}
