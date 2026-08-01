export default function ExhibitionBackground({ period, items = [] }) {
  if (!items.length) return null
  return <section className="exhibition-detail__section"><p>电影工业背景</p><div className="exhibition-background">{items.map(item => <article key={item.title}><small>{period}</small><strong>{item.title}</strong><span>{item.description}</span></article>)}</div></section>
}
