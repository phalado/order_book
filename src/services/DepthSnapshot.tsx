import { Dispatch, SetStateAction } from 'react'

const DepthSnapShot = async (
  setSnapshot: Dispatch<SetStateAction<any>>, assets: string[]
) => {
  const capitalAssets = assets.map(a => a.toUpperCase()).join('')
  const url = "https://api.binance.com/api/v3/depth?symbol=" + capitalAssets + "&limit=1000"

  fetch(url)
    .then((response) => response.json())
    .then(jsonResponse => setSnapshot(jsonResponse))
}

export default DepthSnapShot;
