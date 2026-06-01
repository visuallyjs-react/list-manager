import DefaultGroupComponent from "./components/DefaultGroupComponent";
import DefaultNodeComponent from "./components/DefaultNodeComponent";

const viewOptions = {
    groups: {
        "list": {
            jsx: (ctx) => {
                window.ui = ctx.ui
                    return <DefaultGroupComponent ctx={ctx}/>
            },
            layout: {
                type: "Column",
                options:{
                    padding:{
                        x:0,
                        y:0
                    }
                }
            },
            autoSize: true,
            elementsDraggable: false
        }
    },
    nodes: {
        "default": {
            jsx: (ctx) => <DefaultNodeComponent ctx={ctx}/>
        }
    },
    edges: {
        "default": {
            targetMarker:"PlainArrow",
            deleteButton:"hover",
            paintStyle: {
                stroke: "#94a3b8",
                strokeWidth: 2,
                outlineWidth: 2,
                outlineStroke: "transparent"
            },
            hoverPaintStyle: {
                stroke: "#3b82f6",
                strokeWidth: 3
            }
        }
    }
}

export default viewOptions
