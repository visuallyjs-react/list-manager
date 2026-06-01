export default function DefaultGroupComponent({ctx}) {
    return (
        <div className="vjs-lm-group" data-vjs-list="true">
            <div className="vjs-lm-group-header">
                <span className="vjs-lm-group-title">{ctx.data.label.toUpperCase()}</span>
                <div className="vjs-lm-group-title-accent"/>
            </div>
            <div data-vjs-group-content="true" className="vjs-lm-group-content"/>
        </div>
    )
}
