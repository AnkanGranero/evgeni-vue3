set -e
npm run build
cd dist 
git init
git add -A
git commit -m "deploy"
git push -f git@github.com:AnkanGranero/evgeni-vue3.git main:gh-pages


använd denna istället "git subtree push --prefix dist origin gh-pages"
men du kan behöva ta bort github branchen innan du pushar ( finns såklart bättre lösning)

cd -