import { SurfaceComponent, ControlsComponent } from "@visuallyjs/browser-ui-react"
import renderOptions from "./render-options"
import viewOptions from "./view-options"
import modelOptions from "./model-options"

export default function App({url}) {
    return (
        <div className="vjs-list-manager">
            <SurfaceComponent 
                url={url}
                renderOptions={renderOptions} 
                viewOptions={viewOptions}
                modelOptions={modelOptions}
            >
                <ControlsComponent/>
            </SurfaceComponent>
        </div>
    )
}
