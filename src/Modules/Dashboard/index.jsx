import React from "react"
import NewFile from "./component/NewFile"
import Recentfiles from "./component/Recentfiles"
import Upload from "./component/Upload"
import "./Dashboard.css"
const index = () => {
  return (
    <div className="dashboard">
      <div className="LeftSide">dfgdf</div>
      <div className="Middle">
        <div className="FirstMiddleTop">
          <Recentfiles />
        </div>
        <div className="secondMiddleTop">
          {/* <Upload /> */}
          <NewFile />
        </div>
      </div>
      <div className="RightSide">dfdf</div>
    </div>
  )
}

export default index
