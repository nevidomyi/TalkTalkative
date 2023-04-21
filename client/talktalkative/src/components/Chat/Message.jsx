export default function Message({ avatar, username, text, timeStamp }) {
  return (
    <div id="msg" className="flex mt-4 last:mb-4  relative">
      <div className="h-14 w-14 flex-shrink-0 rounded-full border border-black overflow-hidden">
        <img src={avatar} alt={`${username}'s avatar`} />
      </div>
      <div className="bg-gray-200 ml-2 px-2 pb-5 min-w-message rounded-r-lg rounded-b-lg  relative">
        <div>
          <span className="text-xs text-awesome-blue">
            {'@' + username}
          </span>
        </div>
        <div>
          <p className="text-sm">
            {text}
          </p>
        </div>
        <div className="text-xs font-light absolute right-1 bottom-0">
          {timeStamp}
        </div>
      </div>
    </div>
  )
}