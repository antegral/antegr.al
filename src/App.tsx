import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import "./css/App.css";
import "./css/GetTitleSection.css";
import "./css/GetNavBar.css";
import "./css/GetIntroduceSection.css";
import ArrowIcon from "./icons/next-single-arrow.svg";
import AntegralIcon from "./icons/antegral-9.png";
import MockupBedges from "./images/mockup_bedges.png";

const LoginButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText("#00000"),
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 3,
  borderRadius: 0,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "dark" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 0,
    background:
      "linear-gradient(90deg, rgb(73,233,255) 0%, rgb(146,135,255) 100%)",
  },
}));

function App() {
  return (
    <div>
      <GetNavBar />
      <GetTitleSection />
      <GetIntroduceSection />
    </div>
  );
}

function GetNavBar() {
  return (
    <div className="nav-section">
      <img
        className="nav-icon-antegral"
        src={AntegralIcon}
        alt="ANTEGRAL Icon"
      ></img>

      <div className="nav-area-innermenu">
        <a className="nav-text-menu" href="https://blog.antegral.net">
          BLOG
        </a>
        <a className="nav-text-menu" href="https://service.antegral.net">
          SERVICE
        </a>
        <a className="nav-text-menu" href="https://server.antegral.net">
          SERVER
        </a>
        <a className="nav-text-menu" href="https://github.com/antegral">
          GITHUB
        </a>
        <a className="nav-text-menu" href="mailto:antegral@antegral.net">
          CONTACT
        </a>
      </div>

      <LoginButton variant="text" size="large">
        SIGN IN
      </LoginButton>
    </div>
  );
}

function GetTitleSection() {
  return (
    <div className="pg1-section">
      <h1 className="pg1-title">Hunting the&nbsp;</h1>
      <br />
      <h1 className="pg1-title-underline">Interest</h1>
      <h1 className="pg1-title">&nbsp;things</h1>
      <div className="pg1-area-scrolldown">
        <img
          className="pg1-icon-scrolldown"
          src={ArrowIcon}
          alt="Arrow Icon"
        ></img>
        <p className="pg1-text-scrolldown">아래로 넘기세요</p>
      </div>
      <div className="pg1-area-cardstatus">
        <p className="pg1-text-cardselect" id="card-btn-01">
          01
        </p>
        <p className="pg1-text-cardunselect" id="card-btn-02">
          02
        </p>
        <p className="pg1-text-cardunselect" id="card-btn-03">
          03
        </p>
        <BorderLinearProgress style={{ width: "10em", marginLeft: "1.2em" }} />
      </div>
    </div>
  );
}

function GetIntroduceSection() {
  return (
    <div className="pg2-section">
      <h2 className="pg2-text-title">Introduction</h2>
      <div className="pg2-area-divide">
        <div className="pg2-area-introduce">
          <h3 className="pg2-text-name">SeongUk Moon</h3>
          <p className="pg2-text-introduce">
            흥미를 돋울만한 여러 프로젝트들을 개발하고 있는 학생 개발자입니다.
            <br />
            Typescript, Golang을 사용해서 웹 개발을 주력으로 하고 있습니다.
            <br />
            요즘에는 서버를 운영하고 있고, 서버 메인 웹사이트도 방문해보시는 걸
            추천드립니다.
          </p>
        </div>
        <img
          className="nav-image-mockupbedges"
          src={MockupBedges}
          alt="MockupBedges"
        ></img>
      </div>
      <div className="pg1-area-scrolldown">
        <img
          className="pg1-icon-scrolldown"
          src={ArrowIcon}
          alt="Arrow Icon"
        ></img>
        <p className="pg1-text-scrolldown">아래로 넘기세요</p>
      </div>
    </div>
  );
}

export default App;
