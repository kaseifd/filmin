// vite.config.js
const { resolve } = require('path')
module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        analisis: resolve(__dirname, 'pages/analisis.html'),
        antispoiler: resolve(__dirname, 'pages/anti-spoiler.html'),
        botones: resolve(__dirname, 'pages/botones.html'),
        buscador: resolve(__dirname, 'pages/buscador.html'),
        color: resolve(__dirname, 'pages/color.html'),
        conclusiones: resolve(__dirname, 'pages/conclusiones.html'),
        contexto: resolve(__dirname, 'pages/contexto.html'),
        hifi: resolve(__dirname, 'pages/hifi.html'),
        lofi: resolve(__dirname, 'pages/lofi.html'),
        midfi: resolve(__dirname, 'pages/midfi.html'),
        modal_seguidores: resolve(__dirname, 'pages/modal-seguidores.html'),
        perfiles: resolve(__dirname, 'pages/perfiles.html'),
        playlists: resolve(__dirname, 'pages/playlists.html'),
        reporte: resolve(__dirname, 'pages/reporte.html'),
        tipografia: resolve(__dirname, 'pages/tipografia.html'),
        usuarios: resolve(__dirname, 'pages/usuarios.html'),
        visualizacion: resolve(__dirname, 'pages/visualizacion.html'),
      }
    }
  }
}