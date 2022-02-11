import React from "react";
import TxnPrice from "src/components/molecules/PortfolioGallery/txn-price";

export interface IPriceRendererProps {
  value: any;
  data: Solana.SolanaToken & Solana.NasusSolanaTransaction;
  walletAddr: string;
}

function PriceRenderer({ data, walletAddr }: IPriceRendererProps) {
  return (
    <span>
      <TxnPrice nasusTxn={data} walletAddr={walletAddr} />
    </span>
  );
}

export default PriceRenderer;
