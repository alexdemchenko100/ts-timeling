import activity from "../../assets/icon/activity";
import add from "../../assets/icon/add";
import apple from "../../assets/icon/apple";
import addSolid from "../../assets/icon/addSolid";
import app from "../../assets/icon/app";
import arrowLeft from "../../assets/icon/arrowleft";
import arrowRight from "../../assets/icon/arrowright";
import boost from "../../assets/icon/boost";
import camera from "../../assets/icon/camera";
import calendar from "../../assets/icon/calendar";
import check from "../../assets/icon/check";
import cigarette from "../../assets/icon/cigarette";
import coffee from "../../assets/icon/coffee";
import cog from "../../assets/icon/cog";
import directions from "../../assets/icon/directions";
import dots from "../../assets/icon/dots";
import dotsVertical from "../../assets/icon/dotsvertical";
import drink from "../../assets/icon/drink";
import eye from "../../assets/icon/eye";
import favorite from "../../assets/icon/notifications";
import filter from "../../assets/icon/filter";
import friends from "../../assets/icon/friends";
import gallery from "../../assets/icon/gallery";
import heart from "../../assets/icon/heart";
import heartSolid from "../../assets/icon/heartSolid";
import height from "../../assets/icon/height";
import home from "../../assets/icon/home";
import instagram from "../../assets/icon/instagram";
import location from "../../assets/icon/location";
import match from "../../assets/icon/match";
import mic from "../../assets/icon/mic";
import notice from "../../assets/icon/notice";
import paperclip from "../../assets/icon/paperclip";
import profile from "../../assets/icon/profile";
import profileSolid from "../../assets/icon/profileSolid";
import reset from "../../assets/icon/reset";
import statistic from "../../assets/icon/statistic";
import share from "../../assets/icon/share";
import star from "../../assets/icon/star";
import starSolid from "../../assets/icon/starSolid";
import remove from "../../assets/icon/remove";
import smile from "../../assets/icon/smile";
import send from "../../assets/icon/send";
import video from "../../assets/icon/video";
import utensils from "../../assets/icon/utensils";
import rose from "../../assets/icon/rose";
import premium from "../../assets/icon/premium";
import weight from "../../assets/icon/weight";
import stroller from "../../assets/icon/stroller";
import politics from "../../assets/icon/politics";
import playStore from "../../assets/icon/playStore";
import religion from "../../assets/icon/religion";
import search from "../../assets/icon/search";
import profession from "../../assets/icon/profession";

import "./Icon.scss";
import classNames from "classnames";

const icons: any = {
  activity,
  add,
  "add-solid": addSolid,
  apple,
  "arrow-left": arrowLeft,
  "arrow-right": arrowRight,
  boost,
  calendar,
  camera,
  check,
  close: remove,
  coffee,
  cog,
  directions,
  dots,
  "dots-vertical": dotsVertical,
  drink,
  eye,
  favorite,
  filter,
  friends,
  gallery,
  heart,
  "heart-solid": heartSolid,
  height,
  home,
  instagram,
  kids: stroller,
  like: heartSolid,
  location,
  match,
  mic,
  notice,
  paperclip,
  politics,
  "play-store": playStore,
  premium,
  profession,
  profile,
  "profile-solid": profileSolid,
  rating: starSolid,
  remove,
  religion,
  reset,
  search,
  send,
  share,
  smile,
  smoking: cigarette,
  star,
  statistic,
  "super-like": rose,
  upload: add,
  utensils,
  video,
  workout: weight,
};

type Props = {
  id: string;
  title?: string;
  className?: string;
  children?: any;
};

const Icon = ({ id, title, className, children, ...props }: Props) => {
  const icon = icons[id];

  if (!icon)
    return <span className={classNames(`icon`, className)}>{app}</span>;

  return (
    <span
      {...props}
      title={title}
      aria-label={title}
      className={classNames(`icon icon-${id}`, className)}
    >
      {icon}
      {children}
    </span>
  );
};

export default Icon;
