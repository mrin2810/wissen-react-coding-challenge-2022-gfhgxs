import React, { useEffect, useRef, useState } from 'react';
import Popup from './Popup';
import Hello from './Hello';
import './style.css';

const EyeHideSVG = () => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 284.000000 178.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <g
      transform="translate(0.000000,178.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path d="M1207 1765 c-267 -44 -558 -176 -767 -349 -161 -133 -419 -433 -435 -504 -8 -38 6 -66 90 -177 93 -123 177 -215 283 -307 50 -45 92 -84 92 -88 0 -3 -63 -49 -140 -101 -77 -52 -143 -102 -146 -112 -7 -24 41 -105 71 -119 22 -10 53 8 327 187 939 614 2036 1336 2056 1355 16 15 21 28 16 43 -10 35 -55 96 -75 102 -13 4 -63 -23 -161 -86 -79 -51 -147 -92 -153 -92 -5 0 -41 19 -80 43 -138 85 -304 151 -480 190 -123 27 -378 35 -498 15z m288 -345 c88 -13 213 -72 284 -136 29 -26 50 -51 49 -55 -2 -5 -199 -137 -438 -294 -490 -321 -444 -303 -480 -187 -22 71 -26 197 -10 270 39 166 188 327 353 381 96 31 140 35 242 21z" />
      <path d="M2410 1178 c-80 -51 -215 -139 -300 -195 l-155 -102 -11 -70 c-36 -229 -230 -416 -458 -444 -69 -9 -99 -7 -175 7 l-91 18 -38 -22 c-82 -48 -351 -225 -352 -232 0 -9 92 -43 199 -74 366 -106 766 -57 1118 138 237 131 521 398 661 623 28 43 33 59 27 85 -8 37 -125 195 -216 294 l-64 68 -145 -94z" />
    </g>
  </svg>
);

const EyeSVG = () => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 1200.000000 1200.000000"
  >
    <g
      transform="translate(0.000000,1200.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path d="M5690 10193 c-36 -2 -141 -10 -235 -19 -1623 -147 -3065 -938 -4265  -2339 -433 -506 -881 -1185 -1141 -1729 l-52 -108 91 -182 c507 -1008 1289 -1982 2137 -2661 1118 -896 2398 -1355 3775 -1355 1190 0 2301 340 3310 1013 1034 690 2005 1811 2602 3005 l91 182 -91 183 c-499 998 -1290 1984 -2137 2663 -752 604 -1600 1018 -2482 1213 -505 112 -1074 160 -1603 134z m650 -1513 c487 -69 904 -240 1289 -527 153 -114 410 -372 525 -525 675 -905 728 -2121 133 -3063 -160 -254 -430 -548 -659 -719 -803 -599 -1843 -713 -2751 -300 -303 137 -535 301 -787 553 -385 385 -623 826 -734 1359 -42 200 -50 295 -50 542 0 381 53 667 189 1005 141 351 322 623 599 901 230 229 450 388 721 519 321 155 599 230 990 269 71 7 458 -3 535 -14z" />
      <path d="M5855 7493 c-201 -24 -375 -76 -544 -163 -411 -213 -697 -599 -788 -1065 -12 -65 -17 -139 -17 -265 0 -266 43 -448 159 -678 213 -418 598 -706 1070 -799 137 -27 416 -24 555 6 151 32 268 74 400 142 404 209 683 580 781 1039 30 139 33 418 6 555 -29 148 -74 279 -142 413 -258 509 -781 827 -1345 820 -58 0 -118 -3 -135 -5z" />
    </g>
  </svg>
);

const imageURL =
  'data:image/png;base64,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';

const App = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(false);
  const [showErrorEmail, setShowErrorEmail] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const emailRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (showPopup) {
        setShowPopup(false);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [showPopup]);

  const login = async (email, password) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let reqBody = JSON.stringify({
      email,
      password,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: reqBody,
    };
    const apiUrl = 'https://reqres.in/api/login';
    const data = await fetch(apiUrl, requestOptions);
    const res = await data.json();
    if (res.hasOwnProperty('token')) {
      sessionStorage.setItem('token', res.token);
      setLoggedIn(true);
    } else if (res.hasOwnProperty('error')) {
      setLoggedIn(false);
    }
    setShowPopup(true);
  };

  const validateEmail = () => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return !(!email || regex.test(email) === false);
  };

  const handleSSOClick = () => {
    console.log('SSO clicked');
  };

  const handleNextBtnClick = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <React.Fragment>
      {showPopup && <Popup loggedIn={loggedIn} />}
      {!loggedIn ? (
        <div>
          <div className="main-container">
            <div>
              <img src={imageURL} />
              <h4>Hello there, Sign in to continue</h4>
              <div className="form-container">
                <form>
                  <div className="input-conatiner">
                    <label className="input-label">Email</label>
                    <input
                      className={`input-base`}
                      type="email"
                      ref={emailRef}
                      value={email}
                      onBlur={() => {
                        if (email.length && !validateEmail()) {
                          setShowErrorEmail(true);
                          emailRef.current.classList.add('email-not-validated');
                        }
                      }}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (validateEmail()) {
                          setShowErrorEmail(false);
                          emailRef.current.classList.remove(
                            'email-not-validated'
                          );
                        }
                      }}
                    />
                    {showErrorEmail && (
                      <span className="email-error">Enter Valid EmailID</span>
                    )}
                  </div>
                  <div className="input-container">
                    <label className="input-label">Password</label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type={showPassword ? 'text' : 'password'}
                      className="input-base password-input"
                      value={password}
                    />
                    <div
                      className="eye-icon"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeHideSVG /> : <EyeSVG />}
                    </div>
                  </div>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      className="input-checkbox"
                      onChange={() => setChecked(!checked)}
                    />
                    <label className="checkbox-label">
                      By creating or logging into an account, you are agreeing
                      with our <b>Terms and Conditions</b> and{' '}
                      <b>Privacy Policy</b>
                    </label>
                  </div>
                  <button
                    className="next-btn"
                    onClick={(e) => handleNextBtnClick(e)}
                    disabled={!(validateEmail() && password.length && checked)}
                  >
                    Next
                  </button>
                </form>
                <div className="link-SSO" onClick={handleSSOClick}>
                  Signing with company SSO
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Hello name="Mrinmayee" />
      )}
    </React.Fragment>
  );
};

export default App;
