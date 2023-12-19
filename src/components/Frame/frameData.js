import frame1 from "../../assets/frames/frame1.png";
import frame2 from "../../assets/frames/frame2.png";
import frame3 from "../../assets/frames/frame4.png";
import frame5 from "../../assets/frames/frame5.png";
import frame6 from "../../assets/frames/frame6.png";
import frame7 from "../../assets/frames/frame7.png";
import frame8 from "../../assets/frames/frame8.png";
import frame9 from "../../assets/frames/frame9.png";
import frame10 from "../../assets/frames/frame10.png";
import frame11 from "../../assets/frames/frame11.png";
import frame12 from "../../assets/frames/frame12.png";
import frame13 from "../../assets/frames/frame13.png";

const frameData = [
  {
    id: 1,
    title: "Thank You",
    htmlElement: (
      <div className="text-red-500">
        This is an additional HTML element for the frame.
      </div>
    ),
    framesExample: [
      {
        id: 1,
        title: "Flowers",
        element: (
          <div className="cursor-pointer">
            This is an additional HTML element for the frame.
          </div>
        ),
      },
      {
        id: 2,
        title: "Cakes",
        element: (
          <div className="cursor-pointer">
            This is an additional HTML element for the frame.
          </div>
        ),
      },
      {
        id: 3,
        title: "Emojis",
        element: (
          <div className="cursor-pointer">
            This is an additional HTML element for the frame.
          </div>
        ),
      },
    ],
  },
  {
    id: 2,
    title: "Happy Birthday",
    htmlElement: (
      <div className="text-green-500">
        This is an additional HTML element for the frame.
      </div>
    ),
    framesExample: [
      {
        id: 1,
        title: "Balloons",
        element: (
          <div className="cursor-pointer">
            This is an additional HTML element for the frame.
          </div>
        ),
      },
      {
        id: 2,
        title: "Gifts",
        element: (
          <div className="cursor-pointer">
            This is an additional HTML element for the frame.
          </div>
        ),
      },
      {
        id: 3,
        title: "Birthday Cake",
        element: (
          <div className="cursor-pointer">
            This is an additional HTML element for the frame.
          </div>
        ),
      },
    ],
  },
  {
    id: 3,
    title: "Events",
    htmlElement: (
      <div className="text-red-500">
        This is an additional HTML element for the frame.
      </div>
    ),
    framesExample: [
      {
        id: 1,
        title: "Confetti",
        element: (
          <div className="cursor-pointer">
            This is an additional HTML element for the frame.
          </div>
        ),
      },
      {
        id: 2,
        title: "Party Hats",
        element: (
          <div className="cursor-pointer">
            This is an additional HTML element for the frame.
          </div>
        ),
      },
      {
        id: 3,
        title: "Fireworks",
        element: (
          <div className="cursor-pointer">
            This is an additional HTML element for the frame.
          </div>
        ),
      },
    ],
  },
  {
    id: 4,
    title: "Feelings",
    htmlElement: (
      <div className="text-red-500">
        This is an additional HTML element for the frame.
      </div>
    ),
    framesExample: [
      {
        id: 1,
        title: "Hearts",
        element: (
          <div className="cursor-pointer">
            This is an additional HTML element for the frame.
          </div>
        ),
      },
      {
        id: 2,
        title: "Smiles",
        element: (
          <div className="cursor-pointer">
            This is an additional HTML element for the frame.
          </div>
        ),
      },
      {
        id: 3,
        title: "Tears",
        element: (
          <div className="cursor-pointer">
            This is an additional HTML element for the frame.
          </div>
        ),
      },
    ],
  },
  {
    id: 5,
    title: "Holidays",
    htmlElement: (
      <div className="text-red-500">
        This is an additional HTML element for the frame.
      </div>
    ),
    framesExample: [
      {
        id: 1,
        title: "Ramadan",
        element: (
          <div className="cursor-pointer -z-10 object-cover">
            <img src={frame6} alt="ramadan" className="w-full" />
          </div>
        ),
      },

      {
        id: 2,
        title: "Gift Boxes",
        element: (
          <div className="cursor-pointer -z-10 object-cover">
            <img src={frame7} alt="ramadan" className="w-full" />
          </div>
        ),
      },
      {
        id: 3,
        title: "Santa Claus",
        element: (
          <div className="cursor-pointer">
            This is an additional HTML element for the frame.
          </div>
        ),
      },
    ],
  },
];

export default frameData;
