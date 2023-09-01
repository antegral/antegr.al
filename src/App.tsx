import { useRef } from "react";
import border from "./assets/vertical-border.svg";
import EmailIcon from "./css/icons/email.svg";
import ServerIcon from "./css/icons/server.svg";
import LockIcon from "./css/icons/lock.svg";
import "./css/App.css";
import "./css/reset.css";
import { IconButton } from "@mui/material";
import {
  SiGithub,
  SiLinkedin,
  SiTistory,
  SiOpenwrt,
} from "@icons-pack/react-simple-icons";
import { Typography, List, ListItem, ListItemDecorator } from "@mui/joy";

function App() {
  const flipCardInnerRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!flipCardInnerRef.current) {
      return;
    }
    flipCardInnerRef.current.classList.toggle("flipped");
  };

  return (
    <div className="background">
      <div className="card" onClick={handleClick}>
        <div className="card-inner" ref={flipCardInnerRef}>
          <div className="card-front">
            <div className="card-container">
              <div>
                <div className="icon-title"></div>
                <p className="label-name">SeongUk Moon</p>
                <p className="label-nickname">ANTEGRAL</p>
                <div
                  className="social-buttons"
                  onClick={(e) => e.stopPropagation()}
                >
                  <IconButton href="https://antegr.al/github">
                    <SiGithub color="White"></SiGithub>
                  </IconButton>
                  <IconButton href="https://www.linkedin.com/in/antegral/">
                    <SiLinkedin color="White"></SiLinkedin>
                  </IconButton>
                  <IconButton href="mailto:antegral@antegral.net">
                    <img
                      className="email-icon"
                      src={EmailIcon}
                      alt="Email Icon"
                    />
                  </IconButton>
                  <IconButton href="https://antegr.al/blog">
                    <SiTistory color="White"></SiTistory>
                  </IconButton>
                </div>
              </div>
              <img
                className="vertical-border"
                src={border}
                alt="vertical border"
              />
              <div className="content-container">
                <Typography
                  id="decorated-list-demo"
                  level="body-xs"
                  textTransform="uppercase"
                  fontWeight="lg"
                  mb={1}
                >
                  What I do
                </Typography>
                <div>
                  <ul>
                    <li>Infrastructure Management</li>
                    <li>Web Development</li>
                    <li>Machine Learning</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tip-container">
              <p>card.onclick = (event) =&gt; filpCard();</p>
            </div>
          </div>
          <div className="card-back">
            <div className="card-container">
              <div>
                <p className="label-back-title">My Projects</p>
                <List aria-labelledby="decorated-list">
                  <ListItem
                    sx={{
                      typography: {
                        color: "#e6e6e6",
                        fontFamily: "Titillium Web",
                      },
                    }}
                  >
                    <ListItemDecorator>
                      <IconButton
                        href="https://github.com/antegral/RionsKey"
                        onClick={(e) => e.stopPropagation()}
                        size="small"
                      >
                        <img
                          className="label-back-icon"
                          src={LockIcon}
                          alt="Lock Icon"
                        />
                      </IconButton>
                    </ListItemDecorator>
                    Keypad-Security System Wrapper
                  </ListItem>
                  <ListItem
                    sx={{
                      typography: {
                        color: "#e6e6e6",
                        fontFamily: "Titillium Web",
                      },
                    }}
                  >
                    <ListItemDecorator>
                      <IconButton
                        href="https://git.openwrt.org/?p=openwrt/openwrt.git;a=commit;h=9c8ccdcdc86c46e8be52f20e3668f67eff94c8c0"
                        onClick={(e) => e.stopPropagation()}
                        size="small"
                      >
                        <SiOpenwrt color="White"></SiOpenwrt>
                      </IconButton>
                    </ListItemDecorator>
                    Contribute OpenWrt
                  </ListItem>
                  <ListItem
                    sx={{
                      typography: {
                        color: "#e6e6e6",
                        fontFamily: "Titillium Web",
                      },
                    }}
                  >
                    <ListItemDecorator>
                      <IconButton
                        href="https://antegr.al/servers"
                        onClick={(e) => e.stopPropagation()}
                        size="small"
                      >
                        <img
                          className="label-back-icon"
                          src={ServerIcon}
                          alt="Server Icon"
                        />
                      </IconButton>
                    </ListItemDecorator>
                    Infrastructure Management
                  </ListItem>
                </List>
              </div>
            </div>
            <div className="tip-container">
              <p>To check out more of my projects, visit my Github profile!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
