# isaccoso.github.io

Sito personale e portfolio di Gianluca Iunco. Sito statico in **solo HTML/CSS/JS**,
senza framework né build, pubblicato con **GitHub Pages**.

Online: https://isaccoso.github.io

## Struttura

```
.
├── index.html            # pagina unica del sito
├── assets/
│   ├── styles.css        # stili + tema chiaro/scuro
│   ├── script.js         # toggle tema, menu mobile, anno footer
│   ├── favicon.svg       # icona monogramma
│   └── cv-gianluca-iunco.pdf   # (da aggiungere) CV scaricabile
├── .nojekyll             # disattiva l'elaborazione Jekyll
├── robots.txt
└── sitemap.xml
```

## Cosa personalizzare

Cerca i commenti `<!-- TODO -->` in `index.html`:

- ruolo e frase di presentazione nella hero;
- testo della bio in "Chi sono" e elenco delle competenze;
- le card in "Progetti" (titolo, descrizione, tag, link Demo/Codice);
- le voci della timeline in "Esperienza & formazione";
- URL LinkedIn nella sezione "Contatti";
- aggiungi il file `assets/cv-gianluca-iunco.pdf`.

## Sviluppo locale

Basta aprire `index.html` nel browser. In alternativa, un server statico:

```bash
python -m http.server 8000
# poi apri http://localhost:8000
```

## Pubblicazione su GitHub Pages

1. Crea su GitHub un repository **pubblico** chiamato esattamente `isaccoso.github.io`.
2. Collega e invia questo repo locale (vedi sotto).
3. Su GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   branch `main`, cartella `/ (root)`. Salva.
4. Dopo qualche minuto il sito è online su https://isaccoso.github.io

### Collegare il repository locale

```bash
git add .
git commit -m "Sito portfolio iniziale"
git branch -M main
git remote add origin https://github.com/isaccoso/isaccoso.github.io.git
git push -u origin main
```
