{
  "name": "Pointeuse - Gestion du temps",
  "short_name": "Pointeuse",
  "description": "Application de pointage et gestion du temps de travail",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#9333ea",
  "theme_color": "#9333ea",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ],
  "categories": ["productivity", "business"],
  "shortcuts": [
    {
      "name": "Pointer l'arrivée",
      "short_name": "Arrivée",
      "description": "Pointer rapidement votre arrivée",
      "url": "/?action=clockin",
      "icons": [{ "src": "/icon-192.png", "sizes": "192x192" }]
    },
    {
      "name": "Voir les statistiques",
      "short_name": "Stats",
      "description": "Consulter vos statistiques",
      "url": "/?action=stats",
      "icons": [{ "src": "/icon-192.png", "sizes": "192x192" }]
    }
  ]
}
