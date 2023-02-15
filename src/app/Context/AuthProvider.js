import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/configfb";

export const authProvider = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const unsubrise = auth.onAuthStateChanged((user) => {
        if (user) {
          const { displayName, email, uid, photoURL } = user;
          setUser({ displayName, email, uid, photoURL });
          setIsLoading(false);
          navigate("/");
        } else {
          setUser(undefined);
        }
        setIsLoading(false);
      });
      return () => {
        unsubrise();
      };
    }, 1000);
  }, [navigate]);

  return (
    <authProvider.Provider value={user}>
      {isLoading ? (
        <div
          role="status"
          style={{
            margin: "0 auto",
            display: "flex",
            paddingTop: "20px",
            height: "650px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{
              margin: "auto",
              background: "rgb(255, 255, 255)",
              display: "block",
              shapeRendering: "auto",
            }}
            width="50px"
            height="50px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <g transform="rotate(0 50 50)">
              <rect
                x="46.5"
                y={13}
                rx="3.5"
                ry={9}
                width={7}
                height={18}
                fill="#fe718d"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="0.9900990099009901s"
                  begin="-0.9075907590759075s"
                  repeatCount="indefinite"
                />
              </rect>
            </g>
            <g transform="rotate(30 50 50)">
              <rect
                x="46.5"
                y={13}
                rx="3.5"
                ry={9}
                width={7}
                height={18}
                fill="#f47e60"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="0.9900990099009901s"
                  begin="-0.825082508250825s"
                  repeatCount="indefinite"
                />
              </rect>
            </g>
            <g transform="rotate(60 50 50)">
              <rect
                x="46.5"
                y={13}
                rx="3.5"
                ry={9}
                width={7}
                height={18}
                fill="#f8b26a"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="0.9900990099009901s"
                  begin="-0.7425742574257426s"
                  repeatCount="indefinite"
                />
              </rect>
            </g>
            <g transform="rotate(90 50 50)">
              <rect
                x="46.5"
                y={13}
                rx="3.5"
                ry={9}
                width={7}
                height={18}
                fill="#abbd81"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="0.9900990099009901s"
                  begin="-0.6600660066006601s"
                  repeatCount="indefinite"
                />
              </rect>
            </g>
            <g transform="rotate(120 50 50)">
              <rect
                x="46.5"
                y={13}
                rx="3.5"
                ry={9}
                width={7}
                height={18}
                fill="#849b87"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="0.9900990099009901s"
                  begin="-0.5775577557755776s"
                  repeatCount="indefinite"
                />
              </rect>
            </g>
            <g transform="rotate(150 50 50)">
              <rect
                x="46.5"
                y={13}
                rx="3.5"
                ry={9}
                width={7}
                height={18}
                fill="#6492ac"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="0.9900990099009901s"
                  begin="-0.495049504950495s"
                  repeatCount="indefinite"
                />
              </rect>
            </g>
            <g transform="rotate(180 50 50)">
              <rect
                x="46.5"
                y={13}
                rx="3.5"
                ry={9}
                width={7}
                height={18}
                fill="#637cb5"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="0.9900990099009901s"
                  begin="-0.4125412541254125s"
                  repeatCount="indefinite"
                />
              </rect>
            </g>
            <g transform="rotate(210 50 50)">
              <rect
                x="46.5"
                y={13}
                rx="3.5"
                ry={9}
                width={7}
                height={18}
                fill="#6a63b6"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="0.9900990099009901s"
                  begin="-0.33003300330033003s"
                  repeatCount="indefinite"
                />
              </rect>
            </g>
            <g transform="rotate(240 50 50)">
              <rect
                x="46.5"
                y={13}
                rx="3.5"
                ry={9}
                width={7}
                height={18}
                fill="#fe718d"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="0.9900990099009901s"
                  begin="-0.2475247524752475s"
                  repeatCount="indefinite"
                />
              </rect>
            </g>
            <g transform="rotate(270 50 50)">
              <rect
                x="46.5"
                y={13}
                rx="3.5"
                ry={9}
                width={7}
                height={18}
                fill="#f47e60"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="0.9900990099009901s"
                  begin="-0.16501650165016502s"
                  repeatCount="indefinite"
                />
              </rect>
            </g>
            <g transform="rotate(300 50 50)">
              <rect
                x="46.5"
                y={13}
                rx="3.5"
                ry={9}
                width={7}
                height={18}
                fill="#f8b26a"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="0.9900990099009901s"
                  begin="-0.08250825082508251s"
                  repeatCount="indefinite"
                />
              </rect>
            </g>
            <g transform="rotate(330 50 50)">
              <rect
                x="46.5"
                y={13}
                rx="3.5"
                ry={9}
                width={7}
                height={18}
                fill="#abbd81"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="0.9900990099009901s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </rect>
            </g>
          </svg>
          {/* <span className="sr-only">Loading...</span>
          <p>...Loading</p> */}
        </div>
      ) : (
        children
      )}
    </authProvider.Provider>
  );
}

export default AuthProvider;
