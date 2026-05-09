/**
 * ═══════════════════════════════════════════════════════════════
 * FENIX FRAGRANCE HOLDINGS — VIDEO / MEDIA CONFIGURATION
 * Created by Marcelo Capote · Fenix Fragrance Holdings
 * ═══════════════════════════════════════════════════════════════
 * Edit this file to manage all video content on the site.
 * status: "active" | "paused" | "archived"
 * phase: Tag the current business phase for filtering
 * ═══════════════════════════════════════════════════════════════
 */

const videos = [
  // ─── BRAND CAMPAIGNS ─────────────────────────────────────
  { id: 'camp-001', title: { en: 'Rise With Fenix — Brand Film', pt: 'Renasça com a Fenix — Filme da Marca', es: 'Renace con Fenix — Film de Marca' }, category: 'campaigns', platform: 'youtube', embedId: 'dQw4w9WgXcQ', status: 'active', featured: true, phase: 'launch', date: '2025-01-15' },
  { id: 'camp-002', title: { en: 'The Making of Doce Amazônia', pt: 'A Criação de Doce Amazônia', es: 'La Creación de Doce Amazônia' }, category: 'campaigns', platform: 'youtube', embedId: 'dQw4w9WgXcQ', status: 'active', featured: false, phase: 'product', date: '2025-03-20' },
  { id: 'camp-003', title: { en: 'Bahia Dourada — European Launch', pt: 'Bahia Dourada — Lançamento Europeu', es: 'Bahia Dourada — Lanzamiento Europeo' }, category: 'campaigns', platform: 'youtube', embedId: 'dQw4w9WgXcQ', status: 'active', featured: false, phase: 'expansion', date: '2025-06-10' },
  { id: 'camp-004', title: { en: 'Fenix — 60s Brand Spot', pt: 'Fenix — Spot de 60s', es: 'Fenix — Spot de 60s' }, category: 'campaigns', platform: 'youtube', embedId: 'dQw4w9WgXcQ', status: 'active', featured: false, phase: 'awareness', date: '2025-09-01' },

  // ─── SUMMITS & EVENTS ────────────────────────────────────
  { id: 'evt-001', title: { en: 'Fenix Summit 2023 — Highlights', pt: 'Fenix Summit 2023 — Destaques', es: 'Fenix Summit 2023 — Highlights' }, category: 'events', platform: 'youtube', embedId: 'dQw4w9WgXcQ', status: 'active', featured: true, phase: 'community', date: '2023-11-20' },
  { id: 'evt-002', title: { en: 'Investor Networking Night — London', pt: 'Noite de Networking — Londres', es: 'Noche de Networking — Londres' }, category: 'events', platform: 'youtube', embedId: 'dQw4w9WgXcQ', status: 'active', featured: false, phase: 'expansion', date: '2025-02-14' },
  { id: 'evt-003', title: { en: 'Fenix Convention — São Paulo 2025', pt: 'Convenção Fenix — São Paulo 2025', es: 'Convención Fenix — São Paulo 2025' }, category: 'events', platform: 'youtube', embedId: 'dQw4w9WgXcQ', status: 'active', featured: false, phase: 'community', date: '2025-05-30' },

  // ─── TALENT DISCOVERY ────────────────────────────────────
  { id: 'tal-001', title: { en: 'Meet the New Noses — Talent Class 2024', pt: 'Conheça os Novos Narizes — Turma 2024', es: 'Conoce los Nuevos Narices — Clase 2024' }, category: 'talent', platform: 'youtube', embedId: 'dQw4w9WgXcQ', status: 'active', featured: false, phase: 'talent', date: '2024-08-15' },
  { id: 'tal-002', title: { en: 'From Student to Perfumer — Ana\'s Story', pt: 'De Estudante a Perfumista — A História de Ana', es: 'De Estudiante a Perfumista — La Historia de Ana' }, category: 'talent', platform: 'youtube', embedId: 'dQw4w9WgXcQ', status: 'active', featured: true, phase: 'talent', date: '2025-04-22' },
  { id: 'tal-003', title: { en: 'Talent Showcase — 3 Noses, 3 Creations', pt: 'Showcase de Talentos — 3 Narizes, 3 Criações', es: 'Showcase de Talentos — 3 Narices, 3 Creaciones' }, category: 'talent', platform: 'youtube', embedId: 'dQw4w9WgXcQ', status: 'active', featured: false, phase: 'talent', date: '2025-07-18' },

  // ─── REELS & SHORTS ──────────────────────────────────────
  { id: 'reel-001', title: { en: 'What Does Tonka Bean Smell Like?', pt: 'Como Cheira a Fava Tonka?', es: '¿Cómo Huele el Haba Tonka?' }, category: 'reels', platform: 'tiktok', embedId: '7321904926718402822', status: 'active', featured: false, phase: 'awareness', date: '2025-03-10' },
  { id: 'reel-002', title: { en: 'Quick Notes: Vanilla Orchid', pt: 'Notas Rápidas: Orquídea de Baunilha', es: 'Notas Rápidas: Orquídea de Vainilla' }, category: 'reels', platform: 'instagram', embedId: 'CxNOqBMjGNk', status: 'active', featured: false, phase: 'product', date: '2025-04-05' },
  { id: 'reel-003', title: { en: 'Top 3 Brazilian Sweet Scents', pt: 'Top 3 Aromas Doces Brasileiros', es: 'Top 3 Aromas Dulces Brasileños' }, category: 'reels', platform: 'tiktok', embedId: '7321904926718402822', status: 'active', featured: false, phase: 'awareness', date: '2025-05-20' },
  { id: 'reel-004', title: { en: 'Summit Vibes — Behind the Scenes', pt: 'Vibes do Summit — Bastidores', es: 'Vibes del Summit — Detrás de Cámaras' }, category: 'reels', platform: 'instagram', embedId: 'CxNOqBMjGNk', status: 'active', featured: false, phase: 'community', date: '2025-06-15' },
  { id: 'reel-005', title: { en: 'Layering Tips by Our Master Nose', pt: 'Dicas de Sobreposição do Mestre Nariz', es: 'Tips de Combinación del Maestro Nariz' }, category: 'reels', platform: 'youtube-short', embedId: 'dQw4w9WgXcQ', status: 'active', featured: false, phase: 'product', date: '2025-08-01' },

  // ─── BEHIND THE SCENES ───────────────────────────────────
  { id: 'bts-001', title: { en: 'Inside the Lab: Blending Process', pt: 'No Laboratório: Processo de Mistura', es: 'En el Laboratorio: Proceso de Mezcla' }, category: 'behind', platform: 'youtube', embedId: 'dQw4w9WgXcQ', status: 'active', featured: false, phase: 'product', date: '2025-02-28' },
  { id: 'bts-002', title: { en: 'Amazon Ingredient Sourcing Expedition', pt: 'Expedição de Ingredientes na Amazônia', es: 'Expedición de Ingredientes en la Amazonia' }, category: 'behind', platform: 'youtube', embedId: 'dQw4w9WgXcQ', status: 'active', featured: false, phase: 'product', date: '2025-05-15' },
  { id: 'bts-003', title: { en: 'Setting Up the Fenix Summit', pt: 'Montando o Fenix Summit', es: 'Preparando el Fenix Summit' }, category: 'behind', platform: 'youtube', embedId: 'dQw4w9WgXcQ', status: 'active', featured: false, phase: 'community', date: '2025-10-30' },
];

export const categoryLabels = {
  en: { all: 'All', campaigns: 'Campaigns', events: 'Summits & Events', talent: 'Talent Discovery', reels: 'Reels & Shorts', behind: 'Behind the Scenes' },
  pt: { all: 'Todos', campaigns: 'Campanhas', events: 'Summits & Eventos', talent: 'Descoberta de Talentos', reels: 'Reels & Shorts', behind: 'Bastidores' },
  es: { all: 'Todos', campaigns: 'Campañas', events: 'Summits y Eventos', talent: 'Descubrimiento de Talento', reels: 'Reels & Shorts', behind: 'Detrás de Cámaras' },
};

export function getActiveVideos() { return videos.filter((v) => v.status === 'active'); }
export function getFeaturedVideos() { return videos.filter((v) => v.status === 'active' && v.featured); }
export function getVideosByCategory(cat) { return cat === 'all' ? getActiveVideos() : getActiveVideos().filter((v) => v.category === cat); }
export default videos;
