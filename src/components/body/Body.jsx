import FontSizeSlider from "../FontSizeSlider/FontSizeSlider";
import "./body.css";

function Body() {
  return (
    <div id="section-font">
      <div className="body-container-div">
        <div className="container text-center">
          <div className="row">
            <div className="col col-left" id="body-col">
              <div className="subform-title-div">
                <p className="subform-title-div-text">Comparison</p>
              </div>
              <div className="font-comp">
                <img
                  id="font-pic"
                  src="https://camo.githubusercontent.com/3bf02fdc3edc773b18e65fc7ce408e467d4107f0ac5ba2adbcb8cc631c53b003/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f333639343133312f3139313938302f31656264646630362d376635332d313165322d383035392d3333323833326136353763662e706e67"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center">
          <div className="row">
            <div className="col col-right" id="body-col">
              <div className="subform-title-div">
                <p className="subform-title-div-text">Sizing</p>
              </div>
              <FontSizeSlider />
            </div>
          </div>
        </div>

        <div className="container text-center">
          <div className="row">
            <div className="col col-left" id="body-col">
              <div className="subform-title-div">
                <p className="subform-title-div-text">Characters</p>
              </div>
              <div className="character-list-div">
                <p className="character-list">
                  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                </p>
                <p className="character-list lower">
                  a b c d e f g h i j k l m n o p q r s t u v w x y z
                </p>
                <br />
                <p className="character-list" id="numbers">
                  0 1 2 3 4 5 6 7 8 9
                </p>
              </div>
            </div>
            <div className="col col-right" id="body-col">
              <div className="subform-title-div">
                <p className="subform-title-div-text">Русский</p>
              </div>
              <div className="character-list-div">
                <p className="character-list russian">
                  А Б В Г Д Е Ё Ж З И Й К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Ъ Ы Ь Э
                  Ю Я
                </p>
                <p className="character-list russian-lower">
                  а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э
                  ю я
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
                <p className="subform-title-div-text">Persónur</p>
              </div>
              <div className="character-list-div">
                <p className="character-list icelandic">
                  А Á B D Ð E É F G H I Í J K L M N O Ó P R S T U Ú V X Y Ý Þ Æ
                  Ö
                </p>
                <p className="character-list icelandic-lower">
                  a á b c d ð e é f g h i í j k l m n o ó p q r s t u ú v w x y
                  ý z þ æ ö
                </p>
                <br />
                <p className="character-list" id="numbers">
                  0 1 2 3 4 5 6 7 8 9
                </p>
              </div>
            </div>

            <div className="col col-right" id="body-col">
              <div className="subform-title-div">
                <p className="subform-title-div-text">Symbols</p>
              </div>
              <div className="character-list-div">
                <p className="character-list" id="symbols">
                  ► ◄ ↕ ‼ ¶ ▲ ▼ ↔ ∟ ↨ ! ¡ @ # $ % ^ & * ( ) + , - .÷ / : ; ~ Δ €
                  ƒ … † ‡ ˆ ‰ Š « » ‹ Œ Ž ‘ ± µ ¶ ™ › ¸ œ Ÿ æ ¼ ° ½ ¢ ¾ £ ¿ ¤ ¥
                  ¦ § ¨ × ¹ ² ³ À Á Â Ã Ä Å Æ Ç © ® ¬ ∩ ε₧φ²∞ⁿδ√ΩΘΦ ≈ τ µ ÷ σ ⌡
                  Σ ⌠ π ≤ Γ ≥ ß ±
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
