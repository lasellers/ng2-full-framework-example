git checkout gh-pages
git merge master
ng build -prod --base-href="/ng2-full-framework-example/"
git add dist -f
git status
git commit -am "build dist"
git status
git subtree push --prefix=dist origin gh-pages
git checkout master -f
git branch
git status

