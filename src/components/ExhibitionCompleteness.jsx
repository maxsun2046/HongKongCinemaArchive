import { getExhibitionCompleteness } from '../utils/exhibitionCompleteness'

export default function ExhibitionCompleteness({ exhibition, films }) {
  const report = getExhibitionCompleteness(exhibition, films)
  return <section className="exhibition-completeness"><div className="completeness-heading"><span>展厅完成度</span><b>{report.percent}%</b></div><div className="completeness-bar" aria-label={`展厅完成度 ${report.percent}%`}><i style={{ width: `${report.percent}%` }} /></div><div className="completeness-lists"><p>已完成：{report.completed.map(item => <span key={item.label}>✓ {item.label}</span>)}</p><p>待完善：{report.missing.map(item => <span key={item.label}>□ {item.label}</span>)}</p></div></section>
}
