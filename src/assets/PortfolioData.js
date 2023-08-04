import {
  Find,
  FindDog,
  H,
  L,
  Lago,
  MH,
  ToD,
  WearScent,
  WhatAboutThis,
  Yigeyu,
  ChaCha,
} from "../images";

const WebData = [
  {
    Img: FindDog,
    Title: "찾아줄개",
    SubTitle: "2023 중심대학 공동해커톤 출품작",
    Desc1: "유사도 검사를 통한 유기견 탐색 및 유기동물 입양 독려 서비스",
    Desc2: "React/Rust/OpenCV",
  },
  {
    Img: ChaCha,
    Title: "차차렌터카",
    SubTitle: "DataBase Term Project",
    Desc1: "충남대 렌터카 서비스",
    Desc2: "React/MySQL/Axios",
  },
  {
    Img: L,
    Title: "L사 기업 과제",
    SubTitle: "DataNetworks 연구실 학부연구생으로 기업 과제 참여",
    Desc1: "요구한 기술을 웹서비스로 사용 가능하게 구현",
    Desc2: "React/FastAPI",
  },
  {
    Img: WhatAboutThis,
    Title: "이거어때",
    SubTitle: "2022기준 대학생 위한 노트북 추천",
    Desc1: "MBTI 유형검사 로직을 활용한 노트북 추천",
    Desc2: "React",
  },
  {
    Img: Lago,
    Title: "라고 할 때",
    SubTitle: "CNU Prob Junior 출품작",
    Desc1: "비트코인 API를 활용한 코인 실물 계산기",
    Desc2: "React/Spring",
  },
];

const MobileData = [
  {
    Img: Find,
    Title: "찾아주",
    SubTitle: "2022 CNU Design Sprint 수상작",
    Desc1: "최저가 양주 검색, 픽업 서비스",
    Desc2: "Flutter",
  },
  {
    Img: Yigeyu,
    Title: "이거유",
    SubTitle: "CNU Collathon 수상작",
    Desc1: "대전 지역 분실물 매칭 서비스",
    Desc2: "React-Native",
  },
  {
    Img: WearScent,
    Title: "WearScent",
    SubTitle: "사용자 패션 맞춤 향수 추천",
    Desc1: "Google Teachable Machine을 활용한 패션 분류",
    Desc2: "React-Native/Firebase/Google Teachable Machine",
  },
  {
    Img: H,
    Title: "H사 MVP",
    SubTitle: "Now Platform인턴 외주작",
    Desc1: "요구사항 MVP 개발",
    Desc2: "React-Native",
  },
  {
    Img: MH,
    Title: "모바일 휴가증",
    SubTitle: "뿜뿜 아이디어 경진대회 수상작",
    Desc1: "장병 모바일 휴가증",
    Desc2: "Andriod Studio",
  },
];

const IosData = [
  {
    Img: ToD,
    Title: "투디",
    SubTitle: "지금부터 개발자까지",
    Desc1: "진로 유형 검사 서비스, 개발자 직군별 투두리스트 제공",
    Desc2: "SwiftUI",
  },
];

export { IosData, MobileData, WebData };