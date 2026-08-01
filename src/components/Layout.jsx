import { NavLink } from 'react-router-dom'

const links = [['/', '首页'], ['/movies', '电影'], ['/exhibitions', '展览'], ['/collection', '收藏']]

export default function Layout({ children }) {
  return <><header className="site-header"><NavLink className="brand" to="/"><span>香港电影档案馆</span><small>HONG KONG CINEMA ARCHIVE</small></NavLink><nav>{links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>)}</nav></header><main>{children}</main><footer>私人电影档案 · V0.1 · 仅供个人研究与收藏</footer></>
}
