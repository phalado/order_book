import React, { useEffect } from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';
import AggregatorSelectInterface from '../interfaces/AggregatorSelectInterface';
import styles from '../styles/ChooseAssetsStyles'

const AggregatorSelect = (props: AggregatorSelectInterface) => {
  const { aggregators, choosenAggregator, changeChoosenAggregator } = props;
  console.log(aggregators)

  return(
    <FormControl>
      <Select
        id="aggregator-select"
        value={choosenAggregator}
        sx={styles.aggregatorSelect}
        onChange={(event) => changeChoosenAggregator(Number(event.target.value))}
      >
        {aggregators.map((aggregator: number) => (
          <MenuItem value={aggregator} sx={styles.menuItem}>{aggregator}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default AggregatorSelect;
