const TokenAddressRenderer = (props: any) => {
  const address: string = props.value || '000000000000000000'
  return (
    <a
      className="hover:underline text-sm text-blue-500"
      href={`https://explorer.solana.com/address/${address}`}
      rel="noreferrer"
      target="_blank">
      {`${address.substr(0, 5)}...${address.substr(-3, address.length - 1)}`}
    </a>
  )
}

export default TokenAddressRenderer
