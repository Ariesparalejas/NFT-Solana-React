const TxnAddressRenderer = (props: any) => {
  const address = props.value || '000000000000000000'
  return (
    <a
      className="hover:underline text-sm text-blue-500"
      rel="noreferrer"
      href={`https://explorer.solana.com/txn/${address}`}
      target="_blank">
      {`${address.substr(0, 5)}...${address.substr(-3, address.length - 1)}`}
    </a>
  )
}

export default TxnAddressRenderer
