type TCollectionRendererProp = {
  value: Solana.SolanaToken;
};
const CollectionRenderer = (props: TCollectionRendererProp) => {
  const token: Solana.SolanaToken = props.value;
  return (
    <div className="text-right">
      <span>{token.collectionAddr}</span>
    </div>
  );
};

export default CollectionRenderer;
