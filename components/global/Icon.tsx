import activity from "./icon/activity";
import add from "./icon/add";
import apple from "./icon/apple";
import addSolid from "./icon/addSolid";
import app from "./icon/app";
import arrowLeft from "./icon/arrowleft";
import arrowRight from "./icon/arrowright";
import boost from "./icon/boost";
import camera from "./icon/camera";
import calendar from "./icon/calendar";
import check from "./icon/check";
import cigarette from "./icon/cigarette";
import coffee from "./icon/coffee";
import cog from "./icon/cog";
import directions from "./icon/directions";
import dots from "./icon/dots";
import dotsVertical from "./icon/dotsvertical";
import drink from "./icon/drink";
import eye from "./icon/eye";
import facebook from "./icon/facebook";
import favorite from "./icon/notifications";
import filter from "./icon/filter";
import friends from "./icon/friends";
import gallery from "./icon/gallery";
import heart from "./icon/heart";
import heartSolid from "./icon/heartSolid";
import height from "./icon/height";
import home from "./icon/home";
import instagram from "./icon/instagram";
import location from "./icon/location";
import match from "./icon/match";
import mic from "./icon/mic";
import notice from "./icon/notice";
import paperclip from "./icon/paperclip";
import profile from "./icon/profile";
import profileSolid from "./icon/profileSolid";
import reset from "./icon/reset";
import statistic from "./icon/statistic";
import share from "./icon/share";
import star from "./icon/star";
import starSolid from "./icon/starSolid";
import remove from "./icon/remove";
import smile from "./icon/smile";
import send from "./icon/send";
import video from "./icon/video";
import utensils from "./icon/utensils";
import rose from "./icon/rose";
import premium from "./icon/premium";
import weight from "./icon/weight";
import stroller from "./icon/stroller";
import politics from "./icon/politics";
import playStore from "./icon/playStore";
import religion from "./icon/religion";
import search from "./icon/search";
import tiktok from "./icon/tiktok";
import profession from "./icon/profession";

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
  facebook,
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
  tiktok,
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
