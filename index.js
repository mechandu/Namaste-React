const heading = React.createElement("h1",{jey:"heading1",id:"heading1",title:"Chandu"},"Bheemineni Chandrika")
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)

const headingElement = React.createElement("h1",{id:"heading1",key:"heading"},"CBN")
const childContainerElement = React.createElement("div",{id:"parent",key:"childDiv"},[headingElement])
const parentContainerElement = React.createElement("div",{id:"child"},[childContainerElement])

root.render(parentContainerElement)