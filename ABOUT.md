

## Components

The application uses the following core components from `@visuallyjs/browser-ui-react`:

- **`SurfaceComponent`**: The main canvas area where the lists and items are rendered.

### Custom Components
- **`DefaultGroupComponent`**: Custom JSX component for rendering list groups.
- **`DefaultNodeComponent`**: Custom JSX component for rendering individual list items.

## Interaction Logic
The List Manager uses the `ListManagerPlugin` to manage the layout and interaction of items within lists. It uses a `Column` layout for groups and restricts connections between nodes in the same group via `modelOptions`.

## Configuration Options

- **`renderOptions`**: Configures the surface to use the `ListManagerPlugin` and enables `zoomToFit`.
- **`viewOptions`**: Maps the `list` group type to a vertical column layout with automatic sizing and custom JSX rendering.
- **`modelOptions`**: Implements a `beforeConnect` rule that prevents edges from being created between items in the same group.

## CSS Integration
- **VisuallyJS Core**: The core styles are included in `src/index.css` via `@import "@visuallyjs/browser-ui/css/visuallyjs.css";`.
- **App Styles**: Custom styles for lists and items are imported from `list-manager.css`.
