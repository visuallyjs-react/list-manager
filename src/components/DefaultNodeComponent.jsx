export default function DefaultNodeComponent({ctx}) {
    return (
        <div
            data-vjs-source="true"
            data-vjs-target="true"
            className="vjs-lm-node">
            <div className="vjs-lm-node-header">
                <span className="vjs-lm-node-icon">{ctx.data.icon}</span>
                <span className="vjs-lm-node-label">{ctx.data.label}</span>
            </div>
            <div className="vjs-lm-node-type">
                {ctx.data.type}
            </div>
        </div>
    )
}
