/**
 * Ideally move some of this logic into the backend instead.
 */
export const getTokenImg = (token: Solana.SolanaToken) => {
  if (
    token.nasusThumbnailImageUrl && 
    !token.nasusThumbnailImageUrl.endsWith('undefined') // @todo replace bandaid
  ) {
    return token.nasusThumbnailImageUrl
  } else if (token.centralizedStorageImageUrl && token.centralizedStorageImageUrl.startsWith('https')) {
    return token.centralizedStorageImageUrl
  } else {
    return "/nasus-square.png"
  }
}
