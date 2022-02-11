import numeral from "numeral"

const VolumeRenderer = (props: any) => (
  <div className="text-right">
    <span className="text-primary-dark">
      {numeral(props.value).format(`0,0`)}
    </span>
  </div>
)

export default VolumeRenderer
