import { ViteReactSSG } from 'vite-react-ssg'
import './index.css'
import App from './App'

const routes = [
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        lazy: () => import('./pages/Index').then(m => ({ Component: m.default }))
      },
      {
        path: 'dokumentacija',
        lazy: () => import('./pages/Dokumentacija').then(m => ({ Component: m.default }))
      },
      {
        path: 'kontakt',
        lazy: () => import('./pages/Kontakt').then(m => ({ Component: m.default }))
      },
      {
        path: 'pogoji-uporabe',
        lazy: () => import('./pages/PogojiUporabe').then(m => ({ Component: m.default }))
      },
      {
        path: 'zasebnost',
        lazy: () => import('./pages/PolitikaZasebnosti').then(m => ({ Component: m.default }))
      },
      {
        path: '*',
        lazy: () => import('./pages/NotFound').then(m => ({ Component: m.default }))
      }
    ]
  }
]

export const createRoot = ViteReactSSG(
  { routes },
  () => {
    // Optional callback for additional setup
  }
)
