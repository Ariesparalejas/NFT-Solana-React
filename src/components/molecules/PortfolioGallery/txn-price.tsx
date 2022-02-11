import { startCase } from 'lodash'
import numeral from 'numeral'
import { FC } from 'react'

interface Props {
  nasusTxn: Solana.NasusSolanaTransaction
  walletAddr: string
}

const UserSpecificTxnType: FC<Props> = ({ nasusTxn, walletAddr }) => {

  let price: number = 0;
  if (nasusTxn.userAgnosticTxnType === 'exchange') {
    if (nasusTxn.buyerAddr === walletAddr) {
      price = nasusTxn.buyPrice
    }
    if (nasusTxn.sellerAddr === walletAddr) {
      price = nasusTxn.sellerProceeds
    }
  }

  let priceStr: string = '';
  if (price && price >= 10) {
    priceStr = numeral(price).format(`0,0.00`)
  } else if (price && price < 10) {
    priceStr = numeral(price).format(`0.0000`)
  }

  return (
    <span>
      { priceStr && `◎${priceStr}` }
    </span>
  )
}

export default UserSpecificTxnType
