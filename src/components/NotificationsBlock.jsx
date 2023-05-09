import Notification from "./Notifications";

function NotificationsBlock(props) {
  return (
    <div className="grid place-items-center mt-10 rounded-2xl shadow-lg shadow-[#0e66b130] w-3/5">
      {props.notifications?.map((item, i) => {
        return <Notification key={i} item={item} />;
      })}
    </div>
  );
}

export default NotificationsBlock;
