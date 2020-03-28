# sh ./deploy.sh [major.minor.patch]
# git commit . 'deploy'
# git push origin master:deploy
npm version $1 && \
  git push --follow-tags