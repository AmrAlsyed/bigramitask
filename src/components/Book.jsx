import { useState } from "react";
import Accordion from "./Accordion";

const Book = () => {
  const [pages, setPages] = useState({
    group1: ["Page 1 - 2"],
    group2: ["Page 3 - 4"],
  });
  const [bookmark, setBookmark] = useState(["Page 3"]);
  const [selectedPage, setSelectedPage] = useState("");
  const [loadedPDF, setLoadedPDF] = useState("");

  const handlePageClick = (page) => {
    setSelectedPage(page);
    if (page === "Page 1 - 2") {
      setLoadedPDF("PDF1 is loaded here");
    } else if (page === "Page 3 - 4") {
      setLoadedPDF("PDF2 is loaded here");
    } else {
      setLoadedPDF("");
    }
  };

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
            <div className="css-waryrq">
              <Accordion title="Pages">
                <div>
                  <ul>
                    {pages.group1.map((page, index) => (
                      <li
                        key={index}
                        onClick={() => handlePageClick(page)}
                        style={{
                          backgroundColor:
                            selectedPage === page
                              ? "rgba(85, 231, 72, 0.5)"
                              : "transparent",
                          cursor: "pointer",
                        }}
                      >
                        {page}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <ul>
                    {pages.group2.map((page, index) => (
                      <li
                        key={index}
                        onClick={() => handlePageClick(page)}
                        style={{
                          backgroundColor:
                            selectedPage === page
                              ? "rgba(85, 231, 72, 0.5)"
                              : "transparent",
                          cursor: "pointer",
                        }}
                      >
                        {page}
                      </li>
                    ))}
                  </ul>
                </div>
              </Accordion>
              <Accordion title="Bookmark">
                <ul>
                  {bookmark.map((page, index) => (
                    <li
                      key={index}
                      onClick={() => handlePageClick(page)}
                      style={{
                        backgroundColor:
                          selectedPage === page
                            ? "rgba(85, 231, 72, 0.5)"
                            : "transparent",
                        cursor: "pointer",
                      }}
                    >
                      {page}
                    </li>
                  ))}
                </ul>
              </Accordion>
            </div>
            <div className="css-1ur3h3p">
              <div className="css-1aadjba"></div>
              <div className="css-14or1vz">
                <h1>{selectedPage}</h1>
                <h1>{loadedPDF}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
