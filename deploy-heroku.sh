#!/usr/bin/env bash
set -euo pipefail

APP_NAME="stevens-ba-landing"

if ! command -v heroku >/dev/null 2>&1; then
  echo "Heroku CLI not found. Install it first: https://devcenter.heroku.com/articles/heroku-cli"
  exit 1
fi

if ! heroku apps:info --app "$APP_NAME" >/dev/null 2>&1; then
  echo "Creating Heroku app: $APP_NAME"
  heroku create "$APP_NAME"
fi

heroku git:remote --app "$APP_NAME" --remote heroku
heroku buildpacks:set heroku/nodejs --app "$APP_NAME"

CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
echo "Deploying branch '$CURRENT_BRANCH' to Heroku app '$APP_NAME'..."

git push heroku HEAD:main
heroku open --app "$APP_NAME"
