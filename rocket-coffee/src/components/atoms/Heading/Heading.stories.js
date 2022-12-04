import { withKnobs } from "storybook-addon-knobs-color-options";
import Heading from "./Heading";

export default {
    title: 'Atoms/Heading',
    decorators: [withKnobs],
}

export const standard = () => (
    <Heading>Standard Coffee</Heading>
)