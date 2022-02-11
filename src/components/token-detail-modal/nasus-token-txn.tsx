import React, { FC } from 'react'
import moment from 'src/utils/moment-with-locale'
import TokenAddressRenderer from '../ag-grid-renderers/token-address'
import TxnAddressRenderer from '../ag-grid-renderers/txn-address'
import ExchangeBadge from '../exchange-badge'
import UserAgnosticTxnTypeBadge from '../user-agnostic-txn-type-badge'
import TokenTxnPrice from './txn-price'

interface Props {
  isEven: boolean
  nasusTxn: Solana.NasusSolanaTransaction
}

const NasusTokenTxn: FC<Props> = ({ isEven, nasusTxn }) => {
  const bgColorClassName = isEven ? "bg-app-background" : "bg-app-background-light";

  if (!nasusTxn.buyerAddr && !nasusTxn.sellerAddr) return null

  return (
    <tr className={bgColorClassName}>
      <td className="text-left px-6 py-4 whitespace-nowrap text-sm text-primary-dark">
        <UserAgnosticTxnTypeBadge userAgnosticTxnType={nasusTxn.userAgnosticTxnType} />
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap text-sm text-primary-dark">
        {TxnAddressRenderer({ value: nasusTxn.id }) }
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap text-sm text-primary-dark">
        {nasusTxn.buyerAddr && TokenAddressRenderer({ value: nasusTxn.buyerAddr })}
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap text-sm text-primary-dark">
        <TokenTxnPrice nasusTxn={nasusTxn} />
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap text-sm text-primary-dark">
        {nasusTxn.sellerAddr && TokenAddressRenderer({ value: nasusTxn.sellerAddr })}
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap text-sm">
        <ExchangeBadge exchangeName={nasusTxn.exchange} /> 
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap text-sm text-primary-dark">
        <time dateTime={moment((nasusTxn.blockTime ? nasusTxn.blockTime : 0) * 1000).format('YYYY-MM-DD HH:mm:ss')}>{moment((nasusTxn.blockTime ? nasusTxn.blockTime : 0) * 1000).fromNow(false)}</time>
      </td>
    </tr >
  )
}

export default NasusTokenTxn
