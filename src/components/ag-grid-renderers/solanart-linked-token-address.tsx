const AddressHashRenderer = (props: any) => {
  const address = props.value || "000000000000000000";
  return (
    <a
      className="hover:underline text-sm text-blue-500"
      rel="noreferrer"
      href={`https://solanart.io/search/?token=${address}`}
      target="_blank"
    >
      {`${address.substr(0, 4)}...${address.substr(-4, address.length - 1)}`}
    </a>
  );
};

export default AddressHashRenderer;
