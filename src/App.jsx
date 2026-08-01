import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { AdminCheck, Collection, CompanyDetail, ExhibitionDetail, Exhibitions, FilmDetail, Home, Movies, PersonDetail } from './pages'

export default function App() { return <Layout><Routes><Route path="/" element={<Home />} /><Route path="/movies" element={<Movies />} /><Route path="/movies/:id" element={<FilmDetail />} /><Route path="/person/:id" element={<PersonDetail />} /><Route path="/company/:id" element={<CompanyDetail />} /><Route path="/admin/check" element={<AdminCheck />} /><Route path="/exhibitions" element={<Exhibitions />} /><Route path="/exhibition/:id" element={<ExhibitionDetail />} /><Route path="/collection" element={<Collection />} /></Routes></Layout> }
