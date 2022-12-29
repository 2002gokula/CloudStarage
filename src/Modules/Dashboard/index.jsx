import React, { useEffect, useState } from "react"

import { db } from "../../firebase"
import AddFolderButton from "./component/AddFolderButton"
import FilesView from "./component/FilesView"
import NewFile from "./component/NewFile"
import Recentfiles from "./component/Recentfiles"
// import Upload from "./component/Upload"
import "./Dashboard.css"
const Dashboard = () => {
  const [files, setFiles] = useState([])

  useEffect(() => {
    db.collection("myFiles").onSnapshot((snapshot) => {
      setFiles(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      )
    })
  }, [])

  console.log(files)
  return (
    <div className="dashboard">
      <div className="LeftSide">dfgdf</div>
      <div className="Middle">
        <div className="FirstMiddleTop">
          {files.slice(0, 1).map(({ id, item }) => (
            <Recentfiles name={item.caption} />
          ))}
        </div>
        <div className="secondMiddleTop">
          {/* <Upload /> */}
          <AddFolderButton />
          <NewFile />
          <FilesView />
        </div>
      </div>
      <div className="RightSide">dfdf</div>
    </div>
  )
}

export default Dashboard
