import { useState } from "react";
import Accordion from "./Accordion";

const Book = () => {
  const [pages, setPages] = useState({
    group1: ["Page 1 - 2"],
    group2: ["Page 3 - 4"],
  });
  const [bookmark, setBookmark] = useState(["Page 3"]);
  return (
    <div>
      <div className="css-vw4wm5">
        <div className="css-16r8p2y">
          <div className="css-1mpe1n7">
            <h1>How to Bulk like a Beast</h1>
          </div>
          <div
            className="css-58bxr1"
            style={{ justifyContent: "space-between" }}
          >
            <div
              className="css-waryrq"
              style={{ background: "rgb(39, 39, 39)" }}
            >
              <Accordion title="Pages">
                <div>
                  <ul>
                    {pages.group1.map((page, index) => (
                      <li key={index}>{page}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <ul>
                    {pages.group2.map((page, index) => (
                      <li key={index}>{page}</li>
                    ))}
                  </ul>
                </div>
              </Accordion>
              <Accordion title="Bookmark">
                <ul>
                  {bookmark.map((page, index) => (
                    <li key={index}>{page}</li>
                  ))}
                </ul>
              </Accordion>
            </div>
            <div className="css-1ur3h3p">
              <div className="css-1aadjba"></div>
              <div className="css-14or1vz"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
