import numeral from 'numeral'
import { FC } from 'react'

interface Props {
  nasusTxn: Solana.NasusSolanaTransaction
}

const TokenTxnPrice: FC<Props> = ({ nasusTxn }) => {

  let price: number = 0;
  if (nasusTxn.userAgnosticTxnType === 'exchange') price = nasusTxn.buyPrice

  let priceStr: string = '';
  if (price && price >= 10) {
    priceStr = numeral(price).format(`0,0.00`)
  } else if (price && price < 10) {
    priceStr = numeral(price).format(`0.0000`)
  }

  return <span>{ priceStr && `◎${priceStr}` }</span>
}

export default TokenTxnPrice
