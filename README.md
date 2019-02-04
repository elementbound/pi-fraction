# Pi Fraction #

An estimate for pi is `22/7`. However, we could take this fraction way further, by sampling random points inside a square and checking if it's also part of a circle.

We do this by placing a circle inside a square, and then sampling random points inside. If it's inside the circle, it's a hit, otherwise it's a miss. Based on the ratio of hits and misses, we can calculate pi.

## Usage ##

Install dependencies by running

```sh
npm install
npm install --only=dev
```

Then run

```sh
npm start
```

## License ##

See [LICENSE](LICENSE).