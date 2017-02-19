ng build -prod --base-href="/ng2-full-framework-example/"
git add dist -f
git commit -am "build dist"
git subtree push --prefix=dist origin gh-pages
git checkout master -f

