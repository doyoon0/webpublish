import './App.css';
import './css/Avatar.css'
import { Avatar, AvatarList, AvatarImage, AvatarImageList} from "./components/Avatar.jsx";
// 위 import 중 하나를 default로 주면 {} 밖에 작성 후 comma 입력하면 된다
// import Avatar, { AvatarList, AvatarImage, ...
// import { AvatarList } from "./components/AvatarList.jsx";
// import { AvatarImage } from "./components/AvatarImage.jsx";
// import { AvatarImageList } from "./components/AvatarImageList.jsx";

export default function App() {
  const list = [
    {"img" : "/images/people1.webp", "style" : "avatar-img"},
    {"img" : "/images/people2.webp", "style" : "avatar-img-circle"},
    {"img" : "/images/people3.webp", "style" : "avatar-img"}
  ];

  const alist = [
    {"img" : "/images/people1.webp", "name" : "James"},
    {"img" : "/images/people2.webp", "name" : "Smith"},
    {"img" : "/images/people3.webp", "name" : "Ann"}
  ];

  return (
    <>
      <Avatar img="/images/people3.webp" name="Ann" />
      <hr/>
      <AvatarList list={alist} className="avatar-list" />
      <hr/>
      <AvatarImage img={"/images/people1.webp"} style="avatar-img-circle"/>
      <AvatarImage img={"/images/people2.webp"} style="avatar-img"/>
      <AvatarImage img={"/images/people3.webp"} style="avatar-img-circle"/>
      <hr/>
      <AvatarImageList imgList={list} />
    </>
  );
}

