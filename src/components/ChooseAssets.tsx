import React, { useEffect, useState } from "react";
import { 
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from "@mui/material";

import styles from '../styles/ChooseAssetsStyles'

const ChooseAssets = (
  { changeChoosenAssets }: { changeChoosenAssets: (assets: string[]) => void }
) => {
  const [assets, setAssets] = useState(['', ''])

  const assetTypes = [
    { name: 'US Dolar', symbol: 'busd' },
    { name: 'Bitcoin', symbol: 'btc' },
    { name: 'Ethereum', symbol: 'eth' },
    { name: 'TetherUS', symbol: 'usdt' },
    { name: 'BNB', symbol: 'bnb' },
    { name: 'Cocos-BCX', symbol: 'cocos' },
    { name: 'Ripple', symbol: 'xrp' },
    { name: 'Dogecoin', symbol: 'doge' },
    { name: 'Cardano', symbol: 'ada' },
    { name: 'Polygon', symbol: 'matic' },
    { name: 'Polkadot', symbol: 'dot' },
    { name: 'Litecoin', symbol: 'ltc' }
  ]

  useEffect(() => {
    if (!assets.every(asset => asset === '')) changeChoosenAssets(assets)
  }, [assets])

  return (
    <Container maxWidth="sm" sx={styles.container}>
      <Typography variant="h4" align='center' gutterBottom>Choose two assets:</Typography>
      <div style={styles.formContainer}>
        <FormControl style={styles.formControl}>
          <InputLabel sx={styles.label} id="asset-1-select-label">
            First Asset
          </InputLabel>
          <Select
            labelId="asset-1-select-label"
            id="asset-1-select"
            value={assets[0]}
            label="First Asset"
            sx={styles.select}
            onChange={(event) => setAssets((asset: string[]) => [event.target.value, asset[1]])}
          >
            {assetTypes.filter(asset => asset.symbol !== assets[1]).map(asset => (
              <MenuItem value={asset.symbol} sx={styles.menuItem}>
                {asset.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl style={styles.formControl}>
          <InputLabel sx={styles.label} id="asset-2-select-label">
            Second Asset
          </InputLabel>
          <Select
            labelId="asset-2-select-label"
            id="asset-2-select"
            value={assets[1]}
            label="Second Asset"
            sx={styles.select}
            onChange={(event) => setAssets((asset: string[]) => [asset[0], event.target.value])}
          >
            {assetTypes.filter(asset => asset.symbol !== assets[0]).map(asset => (
              <MenuItem value={asset.symbol} sx={styles.menuItem}>
                {asset.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </Container>
  )
}

export default ChooseAssets
