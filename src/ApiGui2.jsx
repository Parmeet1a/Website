import React from "react";
import "./ApiGui2.css";

function ApiGui2() {
  return (
    <div className="text-white">
      <div className="navbar  h-16 flex bg-slate-800">
        <div className=" h-16 w-16 ml-4">
          <svg
            className="h-16 w-16 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="#00ffff"
              d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"
              class="color000000 svgShape"
            />
          </svg>
        </div>

        <div className="lists text-white flex justify-center items-center text-xl  list-none ml-12">
          <li className="mx-4">
            <a href="/">Product</a>
          </li>
          <li className="mx-4">
            <a href="/">Features</a>
          </li>
          <li className="mx-4">
            <a href="/">Marketplace</a>
          </li>
          <li className="mx-4">
            <a href="/">Company</a>
          </li>
        </div>

        <div className="w-[100%] text-white flex justify-end">
          <div className="flex justify-center items-center font-bold mr-8">
            Log in
          </div>
          <div className="flex justify-center items-center mr-16 ">
            <button className="border-black h-8 w-[150px] rounded-md bg-slate-500 font-bold">
              Start free Trial
            </button>
          </div>
        </div>
      </div>

      <div className="main-body grid grid-cols-2 text-white">
        <div className=" ">
          <div className=" mt-40 ">
            <div className="toggle-bar  ">
              <div className="ml-10 flex justify-evenly w-[45%] bg-black rounded-2xl ">
                <button className="rounded-2xl cursor-pointer  transition duration-250 focus:bg-gradient-to-r from-cyan-500 to-green-500 w-[100px] text-center ">
                  We're hiring
                </button>
                <button className="rounded-2xl cursor-pointer transition duration-300 focus:bg-gradient-to-r from-cyan-500 to-green-500 w-[200px] text-center">
                  Visit our careers page{" "}
                </button>
                <svg
                  className="h-4 w-4 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M24 24H0V0h24v24z" opacity=".87" />
                  <path
                    fill="#ffffff"
                    d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z"
                    class="color000000 svgShape"
                  />
                </svg>
              </div>
            </div>

            <div className="heading mt-8 ">
              <h1 className=" text-6xl font-bold inline-block ml-8 ">
                A better way to
              </h1>
              <p className=" text-6xl font-bold inline-block ml-8 bg-gradient-to-r from-green-200 to-cyan-500 text-transparent bg-clip-text ">
                ship web apps
              </p>
            </div>
          </div>

          <div className="para  mt-4">
            <p className="text-xl  w-[95%] ml-8  ">
              Lorem ipsum dolor elit. Saepe expedita vero illum distinctio hic
              illo voluptatem quae? Soluta veniam vero atque quibusdam quod
              dolores minima consectetur quos hic natus. Itaque consectetur
              exercitationem culpa similique adipisci!
            </p>
          </div>

          <div className="placeholder  mt-16">
            <input
              type="text"
              className="bg-white w-[520px] text-black border-none outline-none rounded-lg h-12 pl-4 ml-8"
              placeholder="Enter your email"
            />
            <button className="w-[200px] mx-4 h-12 text-xl font-bold bg-gradient-to-r rounded-lg from-green-400 to-cyan-500">
              Start free Trial
            </button>
          </div>

          <div className=" w-[75%] ml-8 mt-4">
            <p>
              {" "}
              Start your free 14-day trial, no credit card necessary.By
              providing your email, you agree to our{" "}
              <span className="font-bold">terms of service.</span>
            </p>
          </div>
        </div>
        <div className="">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1150 1150">
            <defs>
              <linearGradient
                id="a"
                x1="91.366%"
                x2="35.239%"
                y1="13.633%"
                y2="69.993%"
              >
                <stop
                  class="stopColorffffff svgShape"
                  offset="0%"
                  stop-color="#fff"
                />
                <stop
                  class="stopColorffffff svgShape"
                  offset="100%"
                  stop-color="#fff"
                  stop-opacity="0"
                />
              </linearGradient>
              <linearGradient
                id="b"
                x1="91.365%"
                x2="35.238%"
                y1="13.634%"
                y2="69.994%"
              >
                <stop
                  class="stopColorffffff svgShape"
                  offset="0%"
                  stop-color="#fff"
                />
                <stop
                  class="stopColorffffff svgShape"
                  offset="100%"
                  stop-color="#fff"
                  stop-opacity="0"
                />
              </linearGradient>
              <linearGradient
                id="c"
                x1="48.338%"
                x2="51.383%"
                y1="3.824%"
                y2="88.429%"
              >
                <stop
                  class="stopColorffffff svgShape"
                  offset="0%"
                  stop-color="#fff"
                />
                <stop
                  class="stopColorffffff svgShape"
                  offset="100%"
                  stop-color="#fff"
                  stop-opacity="0"
                />
              </linearGradient>
              <linearGradient
                id="d"
                x1="48.339%"
                x2="51.383%"
                y1="3.825%"
                y2="88.43%"
              >
                <stop
                  class="stopColorffffff svgShape"
                  offset="0%"
                  stop-color="#fff"
                />
                <stop
                  class="stopColorffffff svgShape"
                  offset="100%"
                  stop-color="#fff"
                  stop-opacity="0"
                />
              </linearGradient>
              <linearGradient
                id="e"
                x1="48.339%"
                x2="51.383%"
                y1="3.835%"
                y2="88.439%"
              >
                <stop
                  class="stopColorffffff svgShape"
                  offset="0%"
                  stop-color="#fff"
                />
                <stop
                  class="stopColorffffff svgShape"
                  offset="100%"
                  stop-color="#fff"
                  stop-opacity="0"
                />
              </linearGradient>
              <linearGradient
                id="f"
                x1="48.339%"
                x2="51.383%"
                y1="3.835%"
                y2="88.439%"
              >
                <stop
                  class="stopColorffffff svgShape"
                  offset="0%"
                  stop-color="#fff"
                />
                <stop
                  class="stopColorffffff svgShape"
                  offset="100%"
                  stop-color="#fff"
                  stop-opacity="0"
                />
              </linearGradient>
              <linearGradient
                id="g"
                x1="60.283%"
                x2="45.252%"
                y1="6.704%"
                y2="69.989%"
              >
                <stop
                  class="stopColorffffff svgShape"
                  offset="0%"
                  stop-color="#fff"
                />
                <stop
                  class="stopColorffffff svgShape"
                  offset="100%"
                  stop-color="#fff"
                  stop-opacity="0"
                />
              </linearGradient>
              <linearGradient
                id="h"
                x1="57.184%"
                x2="38.676%"
                y1="42.82%"
                y2="64.799%"
              >
                <stop
                  class="stopColorffffff svgShape"
                  offset="0%"
                  stop-color="#fff"
                />
                <stop
                  class="stopColorffffff svgShape"
                  offset="100%"
                  stop-color="#fff"
                  stop-opacity="0"
                />
              </linearGradient>
              <linearGradient
                id="i"
                x1="42.795%"
                x2="61.303%"
                y1="57.204%"
                y2="35.226%"
              >
                <stop
                  class="stopColorffffff svgShape"
                  offset="0%"
                  stop-color="#fff"
                />
                <stop
                  class="stopColorffffff svgShape"
                  offset="100%"
                  stop-color="#fff"
                  stop-opacity="0"
                />
              </linearGradient>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <rect
                width="1150"
                height="1150"
                fill="#03092a"
                class="color003ecb svgShape"
              />
              <g
                fill="#00ffff"
                class="color000000 svgShape"
                transform="translate(160 160)"
              >
                <path
                  fill="url(#a)"
                  fill-rule="nonzero"
                  d="M755.2,350 C755.2,354.5 755.1,359 754.8,363.2 C797.8,395.9 830.9,466 830.9,527.7 C830.9,594.9 791.6,626.6 743.1,598.6 C743,598.5 742.9,598.5 742.8,598.4 L438.1,422.7 C438,422.6 437.9,422.6 437.7,422.5 C383.2,391 339,304.3 339,228.8 C339,158.1 377.8,122.2 427.5,143.9 C433.6,95.4 466.1,74.5 505.3,97.2 C524.1,108.1 541.4,127.2 554.9,150.2 C574.5,121.1 607.9,113.7 645.7,135.5 C706.2,170.3 755.2,266.4 755.2,350 Z"
                  opacity=".07"
                />
                <path
                  fill="url(#b)"
                  fill-rule="nonzero"
                  d="M705.2,398 C705.2,402.5 705.1,407 704.8,411.2 C747.8,443.9 780.9,514 780.9,575.7 C780.9,642.9 741.6,674.6 693.1,646.6 C693,646.5 692.9,646.5 692.8,646.4 L388.1,470.7 C388,470.6 387.9,470.6 387.7,470.5 C333.2,439 289,352.3 289,276.8 C289,206.1 327.8,170.2 377.5,191.9 C383.6,143.4 416.1,122.5 455.3,145.2 C474.1,156.1 491.4,175.2 504.9,198.2 C524.5,169.1 557.9,161.7 595.7,183.5 C656.2,218.3 705.2,314.4 705.2,398 Z"
                  opacity=".4"
                />
                <path
                  fill="#00ffff"
                  fill-rule="nonzero"
                  d="M222.8,483.6 L176.4,456.8 L176.4,441.1 L222.8,467.9 C226.6,470.1 232.1,474.5 236.8,481.3 C241.9,488.6 245.5,497.8 245.5,507.8 C245.5,518.8 242.7,525.1 237.3,526.9 C232.3,528.6 226.4,525.7 222.7,523.6 L203.6,512.6 L203.5,512.5 C201.9,511.5 199.3,510.6 197.2,511.2 C195.5,511.7 193.6,513.4 193.6,519.5 C193.6,525.6 195.5,529.4 197.1,531.6 C199.1,534.4 201.7,536.4 203.3,537.2 L203.5,537.3 L261.8,571 L261.8,586.7 L203.8,553.2 C199.8,551.1 194.1,546.7 189.1,539.7 C183.7,532.1 179.9,522.4 180,511.6 C180,500.9 183.7,495.4 189.1,493.9 C194.1,492.5 199.8,494.5 203.8,497 L222.7,507.9 C225.4,509.5 227.5,510.2 228.8,509.7 C229.8,509.4 231.8,507.9 231.8,499.9 C231.8,494.8 230.1,491.4 228.6,489.1 C226.8,486.5 224.3,484.5 222.8,483.6 Z"
                  class="colorffffff svgShape"
                  opacity=".2"
                />
                <path
                  fill="#00ffff"
                  d="M186.4 452.9C186.4 465.8 178.8 471.9 169.5 466.6 160.2 461.2 152.6 446.4 152.6 433.4 152.6 420.5 160.2 414.4 169.5 419.7 178.8 425.1 186.4 440 186.4 452.9zM285.4 591.9C285.4 604.8 277.8 610.9 268.5 605.6 259.2 600.2 251.6 585.4 251.6 572.4 251.6 559.5 259.2 553.4 268.5 558.7 277.8 564.1 285.4 579 285.4 591.9z"
                  class="colorf2994a svgShape"
                />
                <polygon
                  fill="#00ffff"
                  fill-rule="nonzero"
                  points="365.3 259.7 665.2 432.8 665.2 591.5 365.2 418.4"
                  opacity=".07"
                />
                <polygon
                  fill="url(#d)"
                  fill-rule="nonzero"
                  points="325.2 279.7 625.1 452.8 625.1 611.5 325.2 438.4"
                  opacity=".3"
                />
                <path
                  fill="#00ffff"
                  d="M352.1,374.2 C352.1,387 359.7,401.7 369,407.1 C378.3,412.5 385.9,406.5 385.9,393.7 C385.9,380.9 378.3,366.2 369,360.8 C359.7,355.4 352.1,361.4 352.1,374.2 Z"
                  class="colorf2994a svgShape"
                />
                <path
                  fill="#00ffff"
                  fill-rule="nonzero"
                  d="M394.4 398.9C394.4 404.8 397.9 411.7 402.3 414.2 406.6 416.7 410.1 413.9 410.1 408 410.1 402.1 406.6 395.2 402.2 392.7 397.9 390.2 394.4 393 394.4 398.9zM418.5 412.8C418.5 418.7 422 425.6 426.4 428.1 430.7 430.6 434.2 427.8 434.2 421.9 434.2 416 430.7 409.1 426.3 406.6 422 404.1 418.5 406.9 418.5 412.8z"
                  class="colorffffff svgShape"
                  opacity=".15"
                />
                <polygon
                  fill="#00ffff"
                  fill-rule="nonzero"
                  points="549.4 439.8 549.4 530.1 537.6 523.3 537.6 433"
                  class="colorffffff svgShape"
                  opacity=".15"
                />
                <polygon
                  fill="#5fe4d4"
                  fill-rule="nonzero"
                  points="575.2 454.8 575.2 545.1 563.4 538.3 563.4 448"
                  class="colorffffff svgShape"
                  opacity=".15"
                />
                <polygon
                  fill="#5fe4d4"
                  fill-rule="nonzero"
                  points="601.1 469.8 601.1 560.1 589.3 553.3 589.3 463"
                  class="colorffffff svgShape"
                  opacity=".15"
                />
                <polygon
                  fill="url(#e)"
                  fill-rule="nonzero"
                  points="365.2 476.6 665.1 649.7 665.1 808.4 365.2 635.3"
                  opacity=".07"
                />
                <polygon
                  fill="url(#f)"
                  fill-rule="nonzero"
                  points="325.2 497.6 625.1 670.7 625.1 829.4 325.2 656.3"
                  opacity=".3"
                />
                <path
                  fill="#00ffff"
                  d="M352.1,592.1 C352.1,604.9 359.7,619.6 369,625 C378.3,630.4 385.9,624.4 385.9,611.6 C385.9,598.8 378.3,584.1 369,578.7 C359.7,573.3 352.1,579.3 352.1,592.1 Z"
                  class="colorf2994a svgShape"
                />
                <path
                  fill="#5fe4d4"
                  fill-rule="nonzero"
                  d="M394.4 616.9C394.4 622.8 397.9 629.7 402.3 632.2 406.6 634.7 410.1 631.9 410.1 626 410.1 620.1 406.6 613.2 402.2 610.7 397.9 608.2 394.4 610.9 394.4 616.9zM418.4 630.8C418.4 636.7 421.9 643.6 426.3 646.1 430.6 648.6 434.1 645.8 434.1 639.9 434.1 634 430.6 627.1 426.2 624.6 421.9 622 418.4 624.8 418.4 630.8z"
                  class="colorffffff svgShape"
                  opacity=".15"
                />
                <polygon
                  fill="#5fe4d4"
                  fill-rule="nonzero"
                  points="549.4 660.8 549.4 751.1 537.6 744.3 537.6 654"
                  class="colorffffff svgShape"
                  opacity=".15"
                />
                <polygon
                  fill="#5fe4d4"
                  fill-rule="nonzero"
                  points="575.2 675.8 575.2 766.1 563.4 759.3 563.4 669"
                  class="colorffffff svgShape"
                  opacity=".15"
                />
                <polygon
                  fill="#5fe4d4"
                  fill-rule="nonzero"
                  points="601.1 690.8 601.1 781.1 589.3 774.3 589.3 684"
                  class="colorffffff svgShape"
                  opacity=".15"
                />
                <polygon
                  fill="url(#g)"
                  fill-rule="nonzero"
                  points="58.9 44.6 245.8 152.5 245.8 498.8 58.9 390.8"
                  opacity=".3"
                />
                <path
                  fill="#00ffff"
                  d="M174.3 170C174.3 187.3 164.3 195.5 152 188.3 139.7 181.1 129.7 161.3 129.7 144 129.7 126.7 139.7 118.5 152 125.7 164.3 132.9 174.3 152.7 174.3 170zM152 202.2C132.1 190.6 115.7 201.5 112.8 226.5 112.3 230.8 115.6 236.6 119.6 238.9L184.5 276.8C188.5 279.1 191.8 277.3 191.3 272.3 188.3 243.8 171.8 213.8 152 202.2z"
                  class="colorf2c94c svgShape"
                />
                <polygon
                  fill="#5fe4d4"
                  fill-rule="nonzero"
                  points="96.4 269.2 207.8 333.5 207.8 347.1 96.4 282.8"
                  class="colorffffff svgShape"
                  opacity=".15"
                />
                <polygon
                  fill="#5fe4d4"
                  fill-rule="nonzero"
                  points="107.7 302.7 196 353.6 196 367.2 107.7 316.3"
                  class="colorffffff svgShape"
                  opacity=".15"
                />
                <polygon
                  fill="#00ffff"
                  points="130.2 359.9 .2 284.8 .2 323.5 130.2 398.6"
                  class="colorf2c94c svgShape"
                />
                <path
                  fill="url(#h)"
                  fill-rule="nonzero"
                  d="M286.1,0.7 L313.9,55.3 C317.7,62.8 317.1,70.3 312.5,72.1 C307.9,73.9 301.1,69.2 297.3,61.7 L297,61 L297,121.6 C297,128.5 292.2,131.3 286.2,127.9 C280.2,124.4 275.4,116.1 275.4,109.2 L275.4,48.6 L275.1,48.9 C271.3,52 264.4,48.8 259.9,41.7 C255.3,34.6 254.7,26.4 258.5,23.3 L286.1,0.7 Z"
                  opacity=".2"
                />
                <path
                  fill="url(#i)"
                  fill-rule="nonzero"
                  d="M286.1,806.9 L258.3,752.3 C254.5,744.8 255.1,737.3 259.7,735.5 C264.3,733.7 271.1,738.4 274.9,745.9 L275.2,746.6 L275.2,686 C275.2,679.1 280,676.3 286,679.7 C292,683.2 296.8,691.5 296.8,698.4 L296.8,759 L297.1,758.7 C300.9,755.6 307.8,758.8 312.3,765.9 C316.9,773 317.5,781.2 313.7,784.3 L286.1,806.9 Z"
                  opacity=".2"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ApiGui2;
