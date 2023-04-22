import "./body.css";

function Body() {
  return (
    <div className="body-container-div">
      <div className="container text-center">
        <div className="row">
          {/* <div className="col col-left" id="body-col">
            <div className="subform-title-div">
              <p className="subform-title-div-text">characters</p>
            </div>
            
          </div> */}

          <div className="col col-right" id="body-col">
            <p>Font Size Slider</p>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col col-left" id="body-col">
            <div className="subform-title-div">
              <p className="subform-title-div-text">characters & numbers</p>
            </div>
            <div className="character-list-div">
              <p className="character-list">
                ABCDEFGHIJ
                <br />
                KLMNOPQRS
                <br />
                TUVWXYZ
              </p>
              <p className="character-list">
                abcdefghij
                <br />
                klmnopqrs
                <br />
                tuvwxyz
              </p>
              <br />
              <p className="character-list">0123456789</p>
            </div>
          </div>

          <div className="col col-right" id="body-col">
            <div className="subform-title-div">
              <p className="subform-title-div-text">symbols</p>
            </div>
            <div className="character-list-div">
              <p className="character-list" id="symbols">
                ☺☻♥♦♣♠•◘○◙♂♀
                <br />
                ♪♫☼►◄↕‼¶▲▼↔∟↨
                <br />
                !¡@#$%^&*()+,-.÷
                <br />
                /:;~Δ€ƒ…†‡ˆ‰Š«»
                <br />
                ‹ŒŽ‘±µ¶™›¸œŸæ
                <br />
                ¼°½¢¾£¿¤¥¦§¨×¹²³
                <br />
                ÀÁÂÃÄÅÆÇ©®¬
                <br />
                ∩ε₧φ²∞ⁿδ√ΩΘΦ
                <br />
                ≈τµ÷σ⌡Σ⌠π≤Γ≥ß±
                <br />
                α≡░▒▓│┤╡╢╖╕╣║
                <br />
                ▀▐▌▌▄■█←→↓↑
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col col-left" id="body-col">
            <div class="row regular-font-row">
              <div class="col regular-font-col ">
                <p className="regular-font" id="extra-thin">
                  1
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font" id="extra-thin">
                  Ex.Thin
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font" id="extra-thin">
                  regular
                </p>
              </div>
            </div>
            <div class="row regular-font-row">
              <div class="col regular-font-col ">
                <p className="regular-font" id="light-thin">
                  2
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font" id="light-thin">
                  Lt.Thin
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font" id="light-thin">
                  regular
                </p>
              </div>
            </div>
            <div class="row regular-font-row">
              <div class="col regular-font-col ">
                <p className="regular-font" id="thin">
                  3
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font" id="thin">
                  Thin
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font" id="thin">
                  regular
                </p>
              </div>
            </div>
            <div class="row regular-font-row">
              <div class="col regular-font-col ">
                <p className="regular-font" id="medium">
                  4
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font" id="medium">
                  Medium
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font" id="medium">
                  regular
                </p>
              </div>
            </div>
            <div class="row regular-font-row">
              <div class="col regular-font-col ">
                <p className="regular-font" id="regular">
                  5
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font" id="regular">
                  Regular
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font" id="regular">
                  regular
                </p>
              </div>
            </div>
            <div class="row regular-font-row">
              <div class="col regular-font-col ">
                <p className="regular-font" id="normal">
                  6
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font" id="normal">
                  Normal
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font" id="normal">
                  regular
                </p>
              </div>
            </div>
            <div class="row regular-font-row">
              <div class="col regular-font-col ">
                <p className="regular-font" id="light-bold">
                  7
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font" id="light-bold">
                  Lt.Bold
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font" id="light-bold">
                  regular
                </p>
              </div>
            </div>
            <div class="row regular-font-row">
              <div class="col regular-font-col ">
                <p className="regular-font" id="bold">
                  8
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font" id="bold">
                  Bold
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font" id="bold">
                  regular
                </p>
              </div>
            </div>
            <div class="row regular-font-row">
              <div class="col regular-font-col ">
                <p className="regular-font" id="extra-bold">
                  9
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font" id="extra-bold">
                  Ex.Bold
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font" id="extra-bold">
                  regular
                </p>
              </div>
            </div>
          </div>

          <div className="col col-right" id="body-col">
            <div class="row regular-font-row">
              <div class="col regular-font-col ">
                <p className="regular-font italic-font" id="extra-thin">
                  1
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font italic-font" id="extra-thin">
                  Ex.Thin
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font italic-font" id="extra-thin">
                  italic
                </p>
              </div>
            </div>
            <div class="row regular-font-row">
              <div class="col regular-font-col ">
                <p className="regular-font italic-font" id="light-thin">
                  2
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font italic-font" id="light-thin">
                  Lt.Thin
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font italic-font" id="light-thin">
                  italic
                </p>
              </div>
            </div>
            <div class="row regular-font-row">
              <div class="col regular-font-col ">
                <p className="regular-font italic-font" id="thin">
                  3
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font italic-font" id="thin">
                  Thin
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font italic-font" id="thin">
                  italic
                </p>
              </div>
            </div>
            <div class="row regular-font-row">
              <div class="col regular-font-col ">
                <p className="regular-font italic-font" id="medium">
                  4
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font italic-font" id="medium">
                  Medium
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font italic-font" id="medium">
                  italic
                </p>
              </div>
            </div>
            <div class="row regular-font-row">
              <div class="col regular-font-col ">
                <p className="regular-font italic-font" id="regular">
                  5
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font italic-font" id="regular">
                  Regular
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font italic-font" id="regular">
                  italic
                </p>
              </div>
            </div>
            <div class="row regular-font-row">
              <div class="col regular-font-col ">
                <p className="regular-font italic-font" id="normal">
                  6
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font italic-font" id="normal">
                  Normal
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font italic-font" id="normal">
                  italic
                </p>
              </div>
            </div>
            <div class="row regular-font-row">
              <div class="col regular-font-col ">
                <p className="regular-font italic-font" id="light-bold">
                  7
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font italic-font" id="light-bold">
                  Lt.Bold
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font italic-font" id="light-bold">
                  italic
                </p>
              </div>
            </div>
            <div class="row regular-font-row">
              <div class="col regular-font-col ">
                <p className="regular-font italic-font" id="bold">
                  8
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font italic-font" id="bold">
                  Bold
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font italic-font" id="bold">
                  italic
                </p>
              </div>
            </div>
            <div class="row regular-font-row">
              <div class="col regular-font-col ">
                <p className="regular-font italic-font" id="extra-bold">
                  9
                </p>
              </div>
              <div class="col regular-font-col ">
                <p className="regular-font italic-font" id="extra-bold">
                  Ex.Bold
                </p>
              </div>
              <div class="col regular-font-col ">
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
            <div class="row subform-row">
              <div class="col" id="subform-title">
                <div className="subform-title-div">
                  <p className="subform-title-div-text">63px</p>
                </div>
              </div>
              <div class="col" id="subfam-letters">
                <p className="subform-title-div-letters" id="f64px">
                  Lorem ipsum
                </p>
              </div>
            </div>
            <div class="row subform-row">
              <div class="col" id="subform-title">
                <div className="subform-title-div">
                  <p className="subform-title-div-text">48px</p>
                </div>
              </div>
              <div class="col" id="subfam-letters">
                <p className="subform-title-div-letters" id="f48px">
                  Lorem ipsum dolor sit amet,
                </p>
              </div>
            </div>
            <div class="row subform-row">
              <div class="col" id="subform-title">
                <div className="subform-title-div">
                  <p className="subform-title-div-text">32px</p>
                </div>
              </div>
              <div class="col" id="subfam-letters">
                <p className="subform-title-div-letters" id="f32px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </p>
              </div>
            </div>
            <div class="row subform-row">
              <div class="col" id="subform-title">
                <div className="subform-title-div">
                  <p className="subform-title-div-text">24px</p>
                </div>
              </div>
              <div class="col" id="subfam-letters">
                <p className="subform-title-div-letters" id="f24px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div class="row subform-row">
              <div class="col" id="subform-title">
                <div className="subform-title-div">
                  <p className="subform-title-div-text">16px</p>
                </div>
              </div>
              <div class="col" id="subfam-letters">
                <p className="subform-title-div-letters" id="f16px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>

          <div className="col col-right" id="body-col">
            <div class="row subform-row">
              <div class="col" id="subform-title">
                <div className="subform-title-div">
                  <p className="subform-title-div-text">condensed</p>
                </div>
              </div>
              <div class="col" id="subfam-letters">
                <p className="subform-title-div-letters" id="condensed">
                  AaBbCc
                </p>
              </div>
            </div>
            <div class="row subform-row">
              <div class="col" id="subform-title">
                <div className="subform-title-div">
                  <p className="subform-title-div-text">compact</p>
                </div>
              </div>
              <div class="col" id="subfam-letters">
                <p className="subform-title-div-letters" id="compact">
                  AaBbCc
                </p>
              </div>
            </div>
            <div class="row subform-row">
              <div class="col" id="subform-title">
                <div className="subform-title-div">
                  <p className="subform-title-div-text">regular</p>
                </div>
              </div>
              <div class="col" id="subfam-letters">
                <p className="subform-title-div-letters" id="regular">
                  AaBbCc
                </p>
              </div>
            </div>
            <div class="row subform-row">
              <div class="col" id="subform-title">
                <div className="subform-title-div">
                  <p className="subform-title-div-text">expanded</p>
                </div>
              </div>
              <div class="col" id="subfam-letters">
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
            <div className="subform-title-div">
              <p className="subform-title-div-text">45%</p>
            </div>
            <div className="subform-title-div">
              <p className="subform-title-div-text">33%</p>
            </div>
          </div>

          <div className="col col-right" id="body-col">
            <div className="subform-title-div">
              <p className="subform-title-div-text">100% - bold</p>
            </div>
            <div className="subform-title-div">
              <p className="subform-title-div-text">45% - bold</p>
            </div>
            <div className="subform-title-div">
              <p className="subform-title-div-text">33% - bold</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
