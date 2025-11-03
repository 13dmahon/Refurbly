function showOverlay(msg) {
  let el = document.getElementById('__err_overlay__')
  if (!el) {
    el = document.createElement('div')
    el.id = '__err_overlay__'
    el.style.position = 'fixed'
    el.style.inset = '0'
    el.style.background = 'rgba(0,0,0,0.85)'
    el.style.color = 'white'
    el.style.fontFamily = 'monospace'
    el.style.fontSize = '14px'
    el.style.padding = '16px'
    el.style.overflow = 'auto'
    el.style.zIndex = '99999'
    document.body.appendChild(el)
  }
  const p = document.createElement('pre')
  p.textContent = `[${new Date().toISOString()}] ${msg}`
  el.appendChild(p)
}

window.addEventListener('error', (e) => {
  showOverlay(`Error: ${e.message}\n${e.filename}:${e.lineno}:${e.colno}`)
})

window.addEventListener('unhandledrejection', (e) => {
  showOverlay(`UnhandledRejection: ${String(e.reason)}`)
})

window.__log = (msg) => showOverlay(String(msg))

console.log('✅ Error overlay loaded')
