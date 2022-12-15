import { Dispatch, SetStateAction } from 'react'
import { JsonObjectExpression } from 'typescript';

const DepthSnapShopt = async (setData: Dispatch<SetStateAction<any>>) => {
  const url = "https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=1000"

  fetch(url)
    .then((response) => response.json())
    .then(jsonResponse => setData(jsonResponse))
}

export default DepthSnapShopt;
