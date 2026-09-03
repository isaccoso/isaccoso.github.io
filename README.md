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
├── robots.txt            # crawler AI ammessi esplicitamente
├── sitemap.xml
├── llms.txt              # riepilogo curato per assistenti AI (llmstxt.org)
└── about.md              # profilo completo in Markdown (AI + condivisione)
```

## Leggibilità per AI / crawler

- `llms.txt` e `about.md` nella root: versioni testuali del profilo, servite da
  GitHub Pages come `text/markdown`.
- `index.html` include dati strutturati **JSON-LD `Person`** (schema.org) con
  `sameAs` verso tutti i social, più meta Open Graph / Twitter e
  `<link rel="alternate" type="text/markdown">` verso `llms.txt` e `about.md`.
- `robots.txt` elenca esplicitamente i bot AI (GPTBot, ClaudeBot, PerplexityBot,
  Google-Extended, CCBot…) con `Allow: /`.
- Quando cambi bio/esperienza in `index.html`, aggiorna in parallelo `about.md`
  e `llms.txt`, e la data in `sitemap.xml` / footer di `about.md`.

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
