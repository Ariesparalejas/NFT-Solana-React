import Image from "next/image";
import { getTokenImg } from "src/utils/token";

const TokenRenderer = (props: any) => {
  const token: Solana.SolanaToken = props.value

  // @todo why is this sometimes null? handle more gracefully?
  if (!token) return null

  return (
    <div className="text-left">
      <div className="inline-block align-middle pr-2">
        <Image alt="feedback-thank-you" className="w-52 h-52 mt-4" src={getTokenImg(token)} />
      </div>
      <div className="inline-block align-middle text-primary-dark text-sm">
        <strong>
          {token.name}
        </strong>
      </div>
    </div >
  )
}

export default TokenRenderer
