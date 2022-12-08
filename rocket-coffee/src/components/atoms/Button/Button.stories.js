import { action } from "@storybook/addon-actions";
import { text, withKnobs } from "storybook-addon-knobs-color-options";
import Button from "./Button";

export default {
    title: 'Atoms/Button',
    decorators: [withKnobs],
    component: Button,
    argTypes: {
        children: {
            description: 'The element that should be rendered inside the button',
            default: 'undefined'
        },
        onClick: {
            description: 'The function that should be called when the button is clicked',
            default: 'undefined'
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'A simple button component that can be used to trigger actions.'
            }
        }
    }
}

export const standard = () => (
    <Button
        onClick={ action('clicked') }
    >
        { text("Label", "Add to cart") }
    </Button>
)