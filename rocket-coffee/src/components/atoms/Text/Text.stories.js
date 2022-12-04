import { withKnobs } from "storybook-addon-knobs-color-options";
import Text from "./Text";

export default {
    title: 'Atoms/Text',
    decorators: [withKnobs],
}

export const standard = () => (
    <Text>Standard Coffee</Text>
)