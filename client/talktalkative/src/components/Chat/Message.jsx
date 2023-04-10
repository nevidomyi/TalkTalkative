export default function Message(props) {
  return (
    <div id="msg" className="flex mt-4 last:mb-4 relative">
      <div className="h-14 w-14 flex-shrink-0 rounded-full border border-black overflow-hidden">
        <img src={props.avatar} alt={`${props.username}'s avatar`} />
      </div>
      <div className="bg-gray-200 ml-2 px-2 pb-5 rounded-r-lg rounded-b-lg">
        <div>
          <span className="text-xs text-awesome-blue">
            {'@' + props.username}
          </span>
        </div>
        <div>
          <p className="text-sm">
            {props.text}
          </p>
        </div>
        <div className="text-xs absolute right-1 bottom-1">
          {props.timestomp}
        </div>
      </div>
    </div>
  )
}