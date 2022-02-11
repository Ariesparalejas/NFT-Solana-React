import { startCase } from 'lodash'
import { FC } from 'react'

interface Props {
  nasusTxn: Solana.NasusSolanaTransaction
  walletAddr: string
}

const UserSpecificTxnType: FC<Props> = ({ nasusTxn, walletAddr }) => {

  let bg: string = ''
  let text: string = ''
  
  let userSpecificTxnType: Solana.TxnType | undefined = undefined;
  if (nasusTxn.userAgnosticTxnType === 'exchange') {
    if (nasusTxn.buyerAddr === walletAddr) {
      bg = 'bg-green-600'
      text = 'text-white'
      userSpecificTxnType = 'buy'
    }
    if (nasusTxn.sellerAddr === walletAddr) {
      bg = 'bg-red-600'
      text = 'text-white'
      userSpecificTxnType = 'sell'
    }
  } else if (nasusTxn.userAgnosticTxnType === 'list') {
    bg = 'bg-yellow-100'
    userSpecificTxnType = 'list'
  } else if (nasusTxn.userAgnosticTxnType === 'delist') {
    bg = 'bg-blue-100'
    userSpecificTxnType = 'delist'
  } else if (nasusTxn.userAgnosticTxnType === 'mint') {
    bg = 'bg-green-200'
    text = 'text-black'
    userSpecificTxnType = 'mint'
  } else if (nasusTxn.userAgnosticTxnType === 'airdrop') {
    bg = 'bg-blue-300'
    text = 'text-white'
    userSpecificTxnType = 'airdrop'
  }

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium shadow-sm ${bg} ${text}`}>
      {startCase(userSpecificTxnType)}
    </span>
  )
}

export default UserSpecificTxnType
