import FontSizeSlider from "../FontSizeSlider/FontSizeSlider";
import "./body.css";

function Body() {
  return (
    <div id="section-font">
      <div className="body-container-div">
        <div className="container text-center">
          <div className="row">
            <div className="col col-right" id="body-col">
              <FontSizeSlider />
            </div>
          </div>
        </div>

        <div className="container text-center">
          <div className="row">
            <div className="col col-left" id="body-col">
              <div className="subform-title-div">
                <p className="subform-title-div-text">characters</p>
              </div>
              <div className="character-list-div">
                <p className="character-list">ABCDEFGHIJ KLMNOPQRS TUVWXYZ</p>
                <p className="character-list lower">
                  abcdefghij klmnopqrs tuvwxyz
                </p>
                <br />
                <p className="character-list" id="numbers">
                  0123456789
                </p>
              </div>
            </div>
            <div className="col col-right" id="body-col">
              <div className="subform-title-div">
                <p className="subform-title-div-text">Русский</p>
              </div>
              <div className="character-list-div">
                <p className="character-list russian">
                  АБВГДЕЁЖЗИЙК ЛМНОПРСТУФХ ЦЧШЩЪЫЬЭЮЯ
                </p>
                <p className="character-list russian-lower">
                  абвгдеёжзийк лмнопрстуфх цчшщъыьэюя
                </p>
                <br />
                <p className="character-list russian-num">
                  {" "}
                  один две три четыре пять шесть семь восемь девять десять
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container text-center">
          <div className="row">
            <div className="col col-left" id="body-col">
              <div className="subform-title-div">
                <p className="subform-title-div-text">íslenskur</p>
              </div>
              <div className="character-list-div">
                <p className="character-list icelandic">
                  АÁBDÐEÉFGH IÍJKLMNOÓPRS TUÚVXYÝÞÆÖ
                </p>
                <p className="character-list icelandic-lower">
                  aábcdðeéfghií jklmnoópqrstu úvwxyýzþæö
                </p>
                <br />
                <p className="character-list" id="numbers">
                  0123456789
                </p>
              </div>
            </div>

            <div className="col col-right" id="body-col">
              <div className="subform-title-div">
                <p className="subform-title-div-text">symbols</p>
              </div>
              <div className="character-list-div">
                <p className="character-list" id="symbols">
                  ►◄↕‼¶▲▼↔∟↨ !¡@#$%^&*()+,-.÷ /:;~Δ€ƒ…†‡ˆ‰Š«» ‹ŒŽ‘±µ¶™›¸œŸæ
                  ¼°½¢¾£¿¤¥¦§¨×¹²³ ÀÁÂÃÄÅÆÇ©®¬ ∩ε₧φ²∞ⁿδ√ΩΘΦ ≈τµ÷σ⌡Σ⌠π≤Γ≥ß±
                  {/* !@#$%^&*()-_=+:-œ∑´®†¥¨ˆøπåß∂ƒ©˙∆˚¬≈ç√˜µ */}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container text-center">
          <div className="row">
            <div className="col col-left" id="body-col">
              <div className="row regular-font-row">
                <div className="col regular-font-col ">
                  <p className="regular-font" id="extra-thin">
                    1
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font" id="extra-thin">
                    Ex.Thin
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font" id="extra-thin">
                    regular
                  </p>
                </div>
              </div>
              <div className="row regular-font-row">
                <div className="col regular-font-col ">
                  <p className="regular-font" id="light-thin">
                    2
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font" id="light-thin">
                    Lt.Thin
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font" id="light-thin">
                    regular
                  </p>
                </div>
              </div>
              <div className="row regular-font-row">
                <div className="col regular-font-col ">
                  <p className="regular-font" id="thin">
                    3
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font" id="thin">
                    Thin
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font" id="thin">
                    regular
                  </p>
                </div>
              </div>
              <div className="row regular-font-row">
                <div className="col regular-font-col ">
                  <p className="regular-font" id="medium">
                    4
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font" id="medium">
                    Medium
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font" id="medium">
                    regular
                  </p>
                </div>
              </div>
              <div className="row regular-font-row">
                <div className="col regular-font-col ">
                  <p className="regular-font" id="regular">
                    5
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font" id="regular">
                    Regular
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font" id="regular">
                    regular
                  </p>
                </div>
              </div>
              <div className="row regular-font-row">
                <div className="col regular-font-col ">
                  <p className="regular-font" id="normal">
                    6
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font" id="normal">
                    Normal
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font" id="normal">
                    regular
                  </p>
                </div>
              </div>
              <div className="row regular-font-row">
                <div className="col regular-font-col ">
                  <p className="regular-font" id="light-bold">
                    7
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font" id="light-bold">
                    Lt.Bold
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font" id="light-bold">
                    regular
                  </p>
                </div>
              </div>
              <div className="row regular-font-row">
                <div className="col regular-font-col ">
                  <p className="regular-font" id="bold">
                    8
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font" id="bold">
                    Bold
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font" id="bold">
                    regular
                  </p>
                </div>
              </div>
              <div className="row regular-font-row">
                <div className="col regular-font-col ">
                  <p className="regular-font" id="extra-bold">
                    9
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font" id="extra-bold">
                    Ex.Bold
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font" id="extra-bold">
                    regular
                  </p>
                </div>
              </div>
            </div>

            <div className="col col-right" id="body-col">
              <div className="row regular-font-row">
                <div className="col regular-font-col ">
                  <p className="regular-font italic-font" id="extra-thin">
                    1
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font italic-font" id="extra-thin">
                    Ex.Thin
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font italic-font" id="extra-thin">
                    italic
                  </p>
                </div>
              </div>
              <div className="row regular-font-row">
                <div className="col regular-font-col ">
                  <p className="regular-font italic-font" id="light-thin">
                    2
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font italic-font" id="light-thin">
                    Lt.Thin
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font italic-font" id="light-thin">
                    italic
                  </p>
                </div>
              </div>
              <div className="row regular-font-row">
                <div className="col regular-font-col ">
                  <p className="regular-font italic-font" id="thin">
                    3
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font italic-font" id="thin">
                    Thin
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font italic-font" id="thin">
                    italic
                  </p>
                </div>
              </div>
              <div className="row regular-font-row">
                <div className="col regular-font-col ">
                  <p className="regular-font italic-font" id="medium">
                    4
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font italic-font" id="medium">
                    Medium
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font italic-font" id="medium">
                    italic
                  </p>
                </div>
              </div>
              <div className="row regular-font-row">
                <div className="col regular-font-col ">
                  <p className="regular-font italic-font" id="regular">
                    5
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font italic-font" id="regular">
                    Regular
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font italic-font" id="regular">
                    italic
                  </p>
                </div>
              </div>
              <div className="row regular-font-row">
                <div className="col regular-font-col ">
                  <p className="regular-font italic-font" id="normal">
                    6
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font italic-font" id="normal">
                    Normal
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font italic-font" id="normal">
                    italic
                  </p>
                </div>
              </div>
              <div className="row regular-font-row">
                <div className="col regular-font-col ">
                  <p className="regular-font italic-font" id="light-bold">
                    7
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font italic-font" id="light-bold">
                    Lt.Bold
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font italic-font" id="light-bold">
                    italic
                  </p>
                </div>
              </div>
              <div className="row regular-font-row">
                <div className="col regular-font-col ">
                  <p className="regular-font italic-font" id="bold">
                    8
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font italic-font" id="bold">
                    Bold
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font italic-font" id="bold">
                    italic
                  </p>
                </div>
              </div>
              <div className="row regular-font-row">
                <div className="col regular-font-col ">
                  <p className="regular-font italic-font" id="extra-bold">
                    9
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font italic-font" id="extra-bold">
                    Ex.Bold
                  </p>
                </div>
                <div className="col regular-font-col ">
                  <p className="regular-font italic-font" id="extra-bold">
                    italic
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container text-center">
          <div className="row">
            <div className="col col-left" id="body-col">
              <div className="row subform-row">
                <div className="col" id="subform-title">
                  <div className="subform-title-div">
                    <p className="subform-title-div-text">63px</p>
                  </div>
                </div>
                <div className="col" id="subfam-letters">
                  <p className="subform-title-div-letters" id="f64px">
                    Lorem ipsum
                  </p>
                </div>
              </div>
              <div className="row subform-row">
                <div className="col" id="subform-title">
                  <div className="subform-title-div">
                    <p className="subform-title-div-text">48px</p>
                  </div>
                </div>
                <div className="col" id="subfam-letters">
                  <p className="subform-title-div-letters" id="f48px">
                    Lorem ipsum dolor sit amet,
                  </p>
                </div>
              </div>
              <div className="row subform-row">
                <div className="col" id="subform-title">
                  <div className="subform-title-div">
                    <p className="subform-title-div-text">32px</p>
                  </div>
                </div>
                <div className="col" id="subfam-letters">
                  <p className="subform-title-div-letters" id="f32px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                </div>
              </div>
              <div className="row subform-row">
                <div className="col" id="subform-title">
                  <div className="subform-title-div">
                    <p className="subform-title-div-text">24px</p>
                  </div>
                </div>
                <div className="col" id="subfam-letters">
                  <p className="subform-title-div-letters" id="f24px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="row subform-row">
                <div className="col" id="subform-title">
                  <div className="subform-title-div">
                    <p className="subform-title-div-text">16px</p>
                  </div>
                </div>
                <div className="col" id="subfam-letters">
                  <p className="subform-title-div-letters" id="f16px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>

            <div className="col col-right" id="body-col">
              <div className="row subform-row">
                <div className="col" id="subform-title">
                  <div className="subform-title-div">
                    <p className="subform-title-div-text">condensed</p>
                  </div>
                </div>
                <div className="col" id="subfam-letters">
                  <p className="subform-title-div-letters" id="condensed">
                    AaBbCc
                  </p>
                </div>
              </div>
              <div className="row subform-row">
                <div className="col" id="subform-title">
                  <div className="subform-title-div">
                    <p className="subform-title-div-text">compact</p>
                  </div>
                </div>
                <div className="col" id="subfam-letters">
                  <p className="subform-title-div-letters" id="compact">
                    AaBbCc
                  </p>
                </div>
              </div>
              <div className="row subform-row">
                <div className="col" id="subform-title">
                  <div className="subform-title-div">
                    <p className="subform-title-div-text">regular</p>
                  </div>
                </div>
                <div className="col" id="subfam-letters">
                  <p className="subform-title-div-letters" id="regular">
                    AaBbCc
                  </p>
                </div>
              </div>
              <div className="row subform-row">
                <div className="col" id="subform-title">
                  <div className="subform-title-div">
                    <p className="subform-title-div-text">expanded</p>
                  </div>
                </div>
                <div className="col" id="subfam-letters">
                  <p className="subform-title-div-letters" id="expanded">
                    AaBbCc
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center">
          <div className="row">
            <div className="col col-left" id="body-col">
              <div className="subform-title-div">
                <p className="subform-title-div-text">100%</p>
              </div>
              <div className="text-field-div-100">
                <p className="text-field-100">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="subform-title-div">
                <p className="subform-title-div-text">45%</p>
              </div>
              <div className="text-field-div-45">
                <p className="text-field-45">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-field-45">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="subform-title-div">
                <p className="subform-title-div-text">33%</p>
              </div>
              <div className="text-field-div-33">
                <p className="text-field-33">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <p className="text-field-33">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <p className="text-field-33">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            <div className="col col-right" id="body-col">
              <div className="subform-title-div">
                <p className="subform-title-div-text">100% - bold</p>
              </div>
              <div className="text-field-div-100">
                <p className="text-field-100" id="bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="subform-title-div">
                <p className="subform-title-div-text">45% - bold</p>
              </div>
              <div className="text-field-div-45">
                <p className="text-field-45" id="bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-field-45" id="bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="subform-title-div">
                <p className="subform-title-div-text">33% - bold</p>
              </div>
              <div className="text-field-div-33">
                <p className="text-field-33" id="bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <p className="text-field-33" id="bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <p className="text-field-33" id="bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
