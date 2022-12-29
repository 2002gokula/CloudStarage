import React from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/css"
import MoreVertIcon from "@mui/icons-material/MoreVert"
const data = [
  {
    FileName: "Gokula",
    fileStorage: "12GB",
    FileIcon: "https://cdn-icons-png.flaticon.com/512/1379/1379905.png",
    ItemFile: "13Files",
  },
  {
    FileName: "Gokula",
    fileStorage: "12GB",
    FileIcon: "https://cdn-icons-png.flaticon.com/512/1379/1379905.png",
    ItemFile: "13Files",
  },
  {
    FileName: "Gokula",
    fileStorage: "12GB",
    FileIcon: "https://cdn-icons-png.flaticon.com/512/1379/1379905.png",
    ItemFile: "13Files",
  },
  {
    FileName: "Gokula",
    fileStorage: "12GB",
    FileIcon: "https://cdn-icons-png.flaticon.com/512/1379/1379905.png",
    ItemFile: "13Files",
  },
  {
    FileName: "Gokula",
    fileStorage: "12GB",
    FileIcon: "https://cdn-icons-png.flaticon.com/512/1379/1379905.png",
    ItemFile: "13Files",
  },
]
const Recentfiles = ({name}) => {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "1rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  }
  return (
    <div className="Recentfilesection">
      <Splide options={splideOptions}>
        {data.map((value) => (
          <SplideSlide>
            <div className="ItemGrid">
              <div className="resendViewer">
                <img src={value.FileIcon} alt="" />
                <MoreVertIcon />
              </div>
              <h4>{value.FileName}</h4>
              <div className="resentFileName">
                <p>{name}</p>
                <p>{value.ItemFile}</p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}

export default Recentfiles
