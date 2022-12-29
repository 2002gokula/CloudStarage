import React from "react"
import { useEffect } from "react"
import { useState } from "react"

// import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

const FileItem = ({ id, caption, timestamp, fileUrl, size }) => {
  const fileDate = ` ${new Date(timestamp?.toDate()).toLocaleTimeString()}`
  // const fileDate = `${minutes<10? "0"+minutes:minutes} ${seconds<10?"0"+seconds:seconds}`

  const getReadableFileSizeString = (fileSizeInBytes) => {
    let i = -1
    const byteUnits = [" kB", " MB", " GB", " TB", "PB", "EB", "ZB", "YB"]
    do {
      fileSizeInBytes = fileSizeInBytes / 1024
      i++
    } while (fileSizeInBytes > 1024)

    return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i]
  }
  console.log(caption)
  return (
    <div className="fileItem">
      <a href={fileUrl} target="_blank" download>
        <div className="FileLink">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2659/2659360.png"
            alt="logo"
          />
          <p>{caption}</p>
          <div className="FileInformation">
            <p>{getReadableFileSizeString(size)}</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default FileItem
