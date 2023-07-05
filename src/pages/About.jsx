import React, { useState } from "react";
import styled from "styled-components";
import { point, main, purple } from "../components";
import { profile } from "../images";
import {
  MdPerson,
  MdOutlineDateRange,
  MdEmail,
  MdLink,
  MdPlayArrow,
} from "react-icons/md";
// const PC = window.innerWidth > 1024;

const About = () => {
  const [isMore, setMore] = useState(false);
  const handleMore = () => {
    setMore(!isMore);
  };
  return (
    <S.container>
      <S.inner>
        <S.section>
          About Me
          <S.bar />
        </S.section>
        <S.row>
          <div style={{ marginTop: "2.87rem" }}>
            <img src={profile} alt="profile" />
          </div>
          <S.content>
            <S.title>안녕하세요 👋🏻</S.title>
            <S.desc>
              가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마
            </S.desc>
            {isMore ? (
              <>
                <S.infoLabel
                  onClick={() => handleMore()}
                  style={{ cursor: "pointer" }}
                >
                  <MdPlayArrow
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      transform: "rotate(90deg)",
                    }}
                    color={purple}
                  />
                  <S.moreText>더보기</S.moreText>
                </S.infoLabel>
                <h1>asdfa</h1>
                <h1>asdfa</h1>
                <h1>asdfa</h1>
                <h1>asdfa</h1>
                <h1>asdfa</h1>
                <h1>asdfa</h1>
                <h1>asdfa</h1>
                <h1>asdfa</h1>
                <h1>asdfa</h1>
                <h1>asdfa</h1>
              </>
            ) : (
              <S.infoLabel
                onClick={() => handleMore()}
                style={{ cursor: "pointer" }}
              >
                <MdPlayArrow
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                  }}
                  color={purple}
                />
                <S.moreText>더보기</S.moreText>
              </S.infoLabel>
            )}

            <S.line />
            <S.infoBox>
              <S.row>
                <div style={{ flex: 2 }}>
                  <S.infoLabel>
                    <MdPerson style={{ width: "1rem", height: "1rem" }} />
                    <S.infoText>이세준</S.infoText>
                    <S.infoText>Lee SeJun</S.infoText>
                  </S.infoLabel>
                  {/*  */}
                  <S.infoLabel>
                    <MdOutlineDateRange
                      style={{ width: "1rem", height: "1rem" }}
                    />
                    <S.infoText>1999.02.10</S.infoText>
                  </S.infoLabel>
                  {/*  */}
                  <S.infoLabel>
                    <MdEmail style={{ width: "1rem", height: "1rem" }} />
                    <S.infoText>leesjun29@gmail.com</S.infoText>
                  </S.infoLabel>
                </div>
                <div style={{ flex: 1 }}>
                  <S.infoLabel>
                    <MdLink style={{ width: "1rem", height: "1rem" }} />
                    <S.infoText>github</S.infoText>
                  </S.infoLabel>
                  {/*  */}
                  <S.infoLabel>
                    <MdLink style={{ width: "1rem", height: "1rem" }} />
                    <S.infoText>velog</S.infoText>
                  </S.infoLabel>
                  {/*  */}
                  <S.infoLabel>
                    <MdLink style={{ width: "1rem", height: "1rem" }} />
                    <S.infoText>linkednIn</S.infoText>
                  </S.infoLabel>
                </div>
              </S.row>
            </S.infoBox>
          </S.content>
        </S.row>
      </S.inner>
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: 54.375rem;
    min-height: 35.56531rem;
    border-radius: 3.125rem;
    background: #fff;
    box-shadow: 0px 0px 30px 0px rgba(161, 117, 255, 0.3);
    margin-bottom: 5rem;
    @media screen and (min-width: 1024px) {
      float: right;
    }
  `,
  inner: styled.div`
    margin-block: 3.25rem;
    padding-inline: 3.88rem;
  `,
  section: styled.div`
    color: #000;
    font-size: 1.25rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `,
  bar: styled.div`
    width: 1.5rem;
    height: 0.25rem;
    background-color: ${() => point};
    border-radius: 1.25rem;
  `,
  row: styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: flex-start;
  `,
  content: styled.div`
    width: 30.75rem;
    margin-top: 2.87rem;
  `,
  title: styled.div`
    color: #000;
    font-size: 1.25rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `,
  desc: styled.div`
    color: black;
    font-size: 1.2rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    line-height: 2.5rem;
    margin-block: 1.5rem;
  `,
  line: styled.div`
    width: 100%;
    height: 0.125rem;
    background: #cdcdcd;
  `,
  infoBox: styled.div`
    margin-top: 2.13rem;
  `,
  infoLabel: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  `,
  infoText: styled.span`
    color: #000;
    font-size: 1rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 0.94rem;
  `,
  moreText: styled.span`
    background: ${() => main};
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 1.25rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 0.5rem;
  `,
};

export default About;
