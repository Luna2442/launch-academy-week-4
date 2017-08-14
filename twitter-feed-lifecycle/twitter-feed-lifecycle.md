### Setup

From your challenges directory, run the following:

```sh
$ et get twitter-feed-lifecycle
$ cd twitter-feed-lifecycle
$ npm install
$ npm start
```

Open a new tab, and run:

```sh
$ bundle
$ ruby server.rb
```

Visit <http://localhost:8080/> in your browser. You should see a single tweet
from [@GoatUserStories](https://twitter.com/goatuserstories).

Visit <http://localhost:4567/api/v1/tweets> in your browser. You should see a
JSON response of tweets about the React Framework.


### Instructions

Using your knowledge of **React Lifecycle Methods**, modify the existing React
application to `fetch` the list of tweets located at <http://localhost:4567/api/v1/tweets>. Then, update the component `state` to
display this information, instead of the static data loaded from `constants/data.js`.
