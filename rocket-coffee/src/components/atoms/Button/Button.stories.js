import { action } from "@storybook/addon-actions";
import { text, withKnobs } from "storybook-addon-knobs-color-options";
import Button from "./Button";

export default {
    title: 'Atoms/Button',
    decorators: [withKnobs],
}

export const standard = () => (
    <Button
        onClick={ action('clicked') }
    >
        { text("Label", "Add to cart") }
    </Button>
)