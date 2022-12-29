import React, { useState, useEffect } from "react"

import FileItem from "./FileItem"
import FileCard from "./FileCard"
import Grid from "@mui/material/Grid"
import { db } from "../../../firebase"
import { styled } from "@mui/system"
const Item = styled("div")(({ theme, active }) => ({
  backgroundColor: "white",
  padding: theme.spacing(4),
  textAlign: "center",
  color: "black",

  borderColor: "#D6D6D6",
}))

const FilesView = () => {
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

  return (
    <div className="fileItem">
      <Grid
        sx={{ pt: -2 }}
        container
        spacing={{ xs: 2, md: 0 }}
        columns={{ xs: 8, sm: 22, md: 22 }}
      >
        {files.map(({ id, item }) => (
          <Grid
            flexDirection={"column"}
            mt={4}
            ml={3}
            spacing={9}
            item
            xs={18}
            sm={9}
            md={6.5}
          >
            <Item
              sx={{
                border: 1,
                borderColor: "#D6D6D6",
              }}
            >
              <FileItem
                id={id}
                caption={item.caption}
                timestamp={item.timestamp}
                fileUrl={item.fileUrl}
                size={item.size}
              />
            </Item>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default FilesView
