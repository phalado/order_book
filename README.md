# Order Book

This web app is an [order book][order-book] based on [Binance][binance]'s.

This was a requirement for a job application.

## Table of contents

- [Order Book](#order-book)
  - [Table of contents](#table-of-contents)
  - [About](#about)
  - [The project](#the-project)
    - [Choosing the Assets](#choosing-the-assets)
    - [Snapshot](#snapshot)
    - [Subscribing to the stream](#subscribing-to-the-stream)
    - [The live stream](#the-live-stream)
    - [The point aggregator](#the-point-aggregator)
    - [Future works](#future-works)
  - [Technologies used](#technologies-used)
  - [Contact](#contact)

## About

Link to the live version [here][live-version].

Repository: https://github.com/phalado/order_book

Please, star the projects. It makes me happy.


## The project

The requirement was to create an order book similar to Binance's. The user should be able to choose two assets and, then, a live stream from Binance's WebSocket would show the last bids and asks between the chosen assets.


### Choosing the Assets

![choose1][choose1]

![choose2][choose2]


The user should choose two of the following assets:

- Binance US dolar - [BUSD][BUSD]
- Bitcoin - [BTC][BTC]
- Ethereum - [ETH][ETH]
- TetherUS - [USDT][USDT]
- BNB - [BNB][BNB]
- Cocos-BCX - [COCOS][COCOS]
- Ripple = [XRP][XRP]
- Dogecoin = [DOGE][DOGE]
- Cardano = [ADA][ADA]
- Polygon = [MATIC][MATIC]
- Polkadot = [DOT][DOT]
- Litecoin = [LTC][LTC]

Two loose ends left to correct in the future are:

- Not all the pairs have a correspondence in the API
- I could have got all the assets from the API and filtered them to be chosen.

### Snapshot

After the choice of the assets, a depth snapshot is gotten from the API's depth endpoint. This snapshot is used to calculate the current mean value between the assets and to calculate the aggregation points.

### Subscribing to the stream

The stream used here is the [depth stream][depth-stream]. Here I'm creating a WebSocket instance to connect with the stream. After the connection, I'm sending the `SUBSCRIBE` method and a string containing the assets chosen, the stream, and the update speed. In this case of choosing BTC and BUSD as assets, for example, the string would be `btcbusd@depth@1000ms`.

More about stream subscribing can be seen [here][stream-subscribe]

### The live stream

The assets' `bids` and `asks` start to stream, being updated each second.

The default state is both bids and asks tables dividing the screen, with the `total value` and the `last value` being displayed in the middle.

![stream1][stream1]

The user can click on the buttons on the top to change into a buyers table:

![buy][buy]

or a sellers table:

![sell][sell]

### The point aggregator

To the right of the buttons, there is a select input where the user can change the aggregation point.

The aggregation points are calculated using the snapshot.

There is also a `More` button between the tables to redirect the user to a page where he could know more about the first asset.

![stream2][stream2]

![stream3][stream3]

![stream4][stream4]

![stream5][stream5]

### Future works

- Tests
- The mouse over aggregator
- The horizontal red and green bars on each entry

## Technologies used

To create this project I used:

- React
- TypeScript
- WebSocket
- Material UI
- Redux
- A bit of HTML and CSS
- Github
- Netlify for the live version

## Contact

Author: Raphael Cordeiro

Follow me on [Twitter][rapha-twitter], visit my [Github portfolio][rapha-github], my [Linkedin][rapha-linkedin], or my [personal portfolio][rapha-personal].

<!-- Links -->

[live-version]: https://order-book-phalado.netlify.app/
[order-book]: https://www.investopedia.com/terms/o/order-book.asp
[binance]: https://www.binance.com/
[api]: https://binance-docs.github.io/apidocs/spot/en/#change-log
[rapha-github]: https://github.com/phalado
[rapha-twitter]: https://twitter.com/phalado
[rapha-linkedin]: https://www.linkedin.com/in/raphael-cordeiro/
[rapha-personal]: https://www.phalado.tech/

[BUSD]: https://research.binance.com/en/projects/binance-usd
[BTC]: https://www.binance.com/en/price/bitcoin
[ETH]: https://www.binance.com/en/price/ethereum
[USDT]: https://research.binance.com/en/projects/usd-tether
[BNB]: https://research.binance.com/en/projects/bnb
[COCOS]: https://research.binance.com/en/projects/cocos-bcx
[XRP]: https://research.binance.com/en/projects/xrp
[DOGE]: https://research.binance.com/en/projects/dogecoin
[ADA]: https://research.binance.com/en/projects/cardano
[MATIC]: https://research.binance.com/en/projects/matic-network
[DOT]: https://research.binance.com/en/projects/polkadot
[LTC]: https://research.binance.com/en/projects/litecoin

[depth-stream]: https://binance-docs.github.io/apidocs/spot/en/#diff-depth-stream
[stream-subscribe]: https://binance-docs.github.io/apidocs/spot/en/#live-subscribing-unsubscribing-to-streams

<!-- Images -->

[buy]: https://raw.githubusercontent.com/phalado/order_book/main/public/contents/images/buy.png
[sell]: https://raw.githubusercontent.com/phalado/order_book/main/public/contents/images/sell.png
[choose1]: https://raw.githubusercontent.com/phalado/order_book/main/public/contents/images/choose1.png
[choose2]: https://raw.githubusercontent.com/phalado/order_book/main/public/contents/images/choose2.png
[stream1]: https://raw.githubusercontent.com/phalado/order_book/main/public/contents/images/stream1.png
[stream2]: https://raw.githubusercontent.com/phalado/order_book/main/public/contents/images/stream2.png
[stream3]: https://raw.githubusercontent.com/phalado/order_book/main/public/contents/images/stream3.png
[stream4]: https://raw.githubusercontent.com/phalado/order_book/main/public/contents/images/stream4.png
[stream5]: https://raw.githubusercontent.com/phalado/order_book/main/public/contents/images/stream5.png
[binance-stream]: https://raw.githubusercontent.com/phalado/order_book/main/public/contents/images/binance-stream.png
