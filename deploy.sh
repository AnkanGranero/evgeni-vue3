
npm run build
git add dist -f
git commit -m "deploy"
git subtree push --prefix dist origin gh-pages


men du kan behöva ta bort github branchen innan du pushar eller lägga till en ny ( finns såklart bättre lösning)

