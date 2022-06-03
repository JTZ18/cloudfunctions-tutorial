run the following command to install all dependencies of the project, rmb to cd into functions folder
```
npm install
```

always build then deploy (local dev emulator env)
```
npm run build
firebase emulators:start
```

in production build then deploy
```
npm run build
firebase deploy
```


folder directory represents api path
GROUPS/{REACTIVE / RESTFUL}/FILE

groups represents who would call on the api endpoint
ie. users, admins, webclient, server, etc.

reactive apis are triggered by an event. They are written to be executed upon event completion. They are written to listen for a particular event and

restful apis are http requests that are only served when a client requests this server, can be a POST or GET request

