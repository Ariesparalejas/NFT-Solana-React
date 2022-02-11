/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [
      'nasus-nft-images.s3.us-east-2.amazonaws.com',
      // do not add arweave or other potentially malicious urls here
    ],
  },
  reactStrictMode: true,
}
