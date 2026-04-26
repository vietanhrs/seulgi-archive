import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider, createTheme } from '@mantine/core'
import '@mantine/core/styles.css'
import './index.css'
import App from './App.tsx'

const theme = createTheme({
  primaryColor: 'orange',
  defaultRadius: 'xl',
  fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
  headings: {
    fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
    fontWeight: '700',
  },
  colors: {
    sunset: ['#fff1ea', '#ffe0d1', '#ffc7af', '#ffaa8f', '#ff8d6e', '#f67852', '#e45f49', '#c64940', '#9f3738', '#7f2a31'],
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <App />
    </MantineProvider>
  </StrictMode>,
)
