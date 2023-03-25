import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Pagination = () => {
  return (
    <div>
      <div>
        <h1>Check Out Our Recent Reviews</h1>
        <p>
          Our reviews are from individuals like you who have similar interest.
        </p>
      </div>

      <div>
        <h1>Found A Roommate</h1>
        <button>
          <FaAngleLeft />
        </button>
        <button>
          <FaAngleRight />
        </button>
        <blockquote>
          “I’m very pleased with this website. I came across it 2022 and I had
          no regrets whatsoever. I’ve recommended it to so many friends and
          family. I got my roommate from here and there is no issue. I just wish
          Studentrealestates becomes viral because it makes roommate pairing
          easier.”
        </blockquote>
      </div>
    </div>
  );
};

export default Pagination;
