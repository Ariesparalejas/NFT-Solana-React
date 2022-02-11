import React from "react";
import UserSpecificTxnType from "../PortfolioGallery/user-specific-txn-type";

export interface ITransactionBadgeRendererProps {
  value: any;
  data: Solana.SolanaToken & Solana.NasusSolanaTransaction;
  walletAddr: string;
}

function TransactionBadgeRenderer({
  data,
  walletAddr,
}: ITransactionBadgeRendererProps) {
  return (
    <span>
      <UserSpecificTxnType nasusTxn={data} walletAddr={walletAddr} />
    </span>
  );
}

export default TransactionBadgeRenderer;
