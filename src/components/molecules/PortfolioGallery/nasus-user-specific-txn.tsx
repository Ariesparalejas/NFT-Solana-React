import { FC } from 'react'
import moment from 'src/utils/moment-with-locale'
import { Card } from 'react-bootstrap'
import ExchangeBadge from 'src/components/exchange-badge'
import TxnPrice from './txn-price'
import UserSpecificTxnType from './user-specific-txn-type'
import Link from 'next/link'

interface Props {
  isEven: boolean
  nasusTxn: Solana.NasusSolanaTransaction
  walletAddr: string
}

const NasusUserSpecificTxn: FC<Props> = ({ isEven, nasusTxn, walletAddr }) => {
  const bgColorClassName = isEven ? "bg-app-background" : "bg-app-primary-light";
  return (
    <tr className={bgColorClassName}>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-dark">
        <div className="flex  items-center">
          <div className="flex-initial flex-shrink-0">
            <Card
              className="mx-auto rounded-md"
            >
              <Card.Img className="rounded w-8 h-8" variant="top" src={nasusTxn.nasusThumbnailImageUrl || nasusTxn.decentralizedStorageImageUrl || '/nasus-square.png'} />
            </Card>
          </div>
          <div className="flex-initial ml-2 justify-center">
            {/* {`${nasusTxn.tokenAddr && nasusTxn.tokenAddr.substr(0, 5)}...${nasusTxn.tokenAddr &&  nasusTxn.tokenAddr.substr(-5, nasusTxn.tokenAddr.length - 1)}`} */}
            <Link href={`/token/${nasusTxn.tokenAddr}`} passHref><span className="cursor-pointer text-blue-500">{nasusTxn.name}</span></Link>
          </div>
        </div>
      </td>

      <td className="text-center px-6 py-4 whitespace-nowrap text-sm">
        <UserSpecificTxnType nasusTxn={nasusTxn} walletAddr={walletAddr} />
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap text-sm text-primary-dark">
        <TxnPrice nasusTxn={nasusTxn} walletAddr={walletAddr} />
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap text-sm">
        <ExchangeBadge exchangeName={nasusTxn.exchange} />
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap text-sm text-primary-dark">
        <time dateTime={moment((nasusTxn.blockTime ? nasusTxn.blockTime : 0) * 1000).format('YYYY-MM-DD HH:mm:ss')}>{moment((nasusTxn.blockTime ? nasusTxn.blockTime : 0) * 1000).fromNow()}</time>
      </td>
    </tr >
  )
}

export default NasusUserSpecificTxn
