import TxnTypeBadge from '../txn-type-badge'

type TtxnTypeRenderer = {
    value: Solana.TxnType;
}

const TxnTypeRenderer = (props: TtxnTypeRenderer) => <TxnTypeBadge txnType={props.value} />

export default TxnTypeRenderer
