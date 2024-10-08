## running

run with docker

set AUTH0_BASE_URL=http://localhost:3000
in web .env

```sh
docker compose -f docker-compose-prod.yml up -d --build
```

env files in source control for simplicity, in a real scenario we would need to ignore them and create our own auth0 app

## deployed at

--

## next steps

- Add testing using react testing library and jest
- Include operations (currently mock data can be added by calling /proxy/mock)
- use production build instead of development mode
- add catch all route and error route to frontend
