import "./header.css";

function Header() {
  return (
    <div className="heady-container-div">
      <div className="col" id="header-text-div">
        <h1 id="header-text">Helvetica</h1>
      </div>
      <div className="line-div"></div>

      <div className="container text-center">
        <div className="row header-row">
          <div className="col" id="header-col">
            Helvetica, also known by its original name Neue Haas Grotesk, is a
            widely used sans-serif typeface developed in 1957 by Swiss typeface
            designer Max Miedinger and Eduard Hoffmann.
          </div>
          <div className="col" id="header-col">
            Helvetica is a neo-grotesque design, one influenced by the famous
            19th century (1890s) typeface Akzidenz-Grotesk and other German and
            Swiss designs. Its use became a hallmark of the International
            Typographic Style that emerged from the work of Swiss designers in
            the 1950s and 1960s, becoming one of the most popular typefaces of
            the mid-20th century. Over the years, a wide range of variants have
            been released in different weights, widths, and sizes, as well as
            matching designs for a range of non-Latin alphabets. Notable
            features of Helvetica as originally designed include a high
            x-height, the termination of strokes on horizontal or vertical lines
            and an unusually tight spacing between letters, which combine to
            give it a dense, solid appearance.
          </div>
          <div className="col" id="header-col">
            Developed by the Haas'sche Schriftgiesserei (Haas Type Foundry) of
            Münchenstein (Basel), Switzerland, its release was planned to match
            a trend: a resurgence of interest in turn-of-the-century "grotesque"
            sans-serifs among European graphic designers, that also saw the
            release of Univers by Adrian Frutiger the same year. Hoffmann was
            the president of the Haas Type Foundry, while Miedinger was a
            freelance graphic designer who had formerly worked as a Haas
            salesman and designer.
          </div>
        </div>
        <div className="row header-row">
          <div className="col" id="header-col">
            Miedinger and Hoffmann set out to create a neutral typeface that had
            great clarity, had no intrinsic meaning in its form, and could be
            used on a wide variety of signage. Originally named Neue Haas
            Grotesk (New Haas Grotesque), it was rapidly licensed by Linotype
            and renamed Helvetica in 1960, which in Latin means "Swiss", from
            Helvetia, capitalising on Switzerland's reputation as a centre of
            ultra-modern graphic design. A feature-length film directed by Gary
            Hustwit was released in 2007 to coincide with the 50th anniversary
            of the typeface's introduction in 1957.
          </div>
          <div className="col" id="header-col">
            Like many neo-grotesque designs, Helvetica has narrow apertures,
            which limits its legibility onscreen and at small print sizes. It
            also has no visible difference between upper-case 'i' and lower-case
            'L', although the number 1 is quite identifiable with its flag at
            top left. Its tight, display-oriented spacing may also pose problems
            for legibility. Other fonts intended for legibility at small sizes
            such as Verdana, Meta, Trebuchet, or a monospace font such as
            Courier, which makes all letters quite wide, may be more appropriate
            than Helvetica.
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
