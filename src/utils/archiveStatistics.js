export function getArchiveStatistics({ films, people, companies, exhibitions }) {
  return { films: films.length, people: people.length, companies: companies.length, exhibitions: exhibitions.length, eras: exhibitions.map(({ id, period, title, summary }) => ({ id, period, title, summary })) }
}
