import numeral from "numeral"

const PriceRenderer = (props: any) => (
  <div className="text-right">
    <span>
      ◎{numeral(props.value).format(`0,0.00`)}
    </span>
  </div>
)

export default PriceRenderer
