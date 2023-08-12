// eslint-disable-next-line react/prop-types
const Avatar = ({ userId, username, online }) => {
  const colors = [
    "bg-red-400",
    "bg-pink-400",
    "bg-gray-400",
    "bg-purple-400",
    "bg-blue-400",
    "bg-yellow-400",
    "bg-teal-400",
  ];

  const userIdBase10 = parseInt(userId, 16);
  const colorIndex = userIdBase10 % colors.length;
  const color = colors[colorIndex];

  return (
    <div className={"w-8 h-8 relative rounded-full flex items-center " + color}>
      <div className="text-center w-full opacity-70">{username[0]}</div>
      {online && (
        <div className="absolute w-3 h-3 bg-green-500 bottom-0 right-0 rounded-full border border-white"></div>
      )}
    </div>
  );
};

export default Avatar;
