import moment from "moment"

const UpdatedAtRenderer = (props: any) => (
  <div className="text-right">
    <span className="text-gray-600">
      {moment(props.value).format('MM/DD')}
    </span>
    <span className="text-gray-400 pl-2">
      {moment(props.value).format('HH:mm')}
    </span>

  </div>
)

export default UpdatedAtRenderer
