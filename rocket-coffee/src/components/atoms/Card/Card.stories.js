import { withKnobs } from "storybook-addon-knobs-color-options";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import Card from "./Card";


export default {
    title: 'Atoms/Card',
    decorators: [withKnobs],
}

export const standard = () => (
    <Card>
        <Heading>Standard Coffee</Heading>
        <Text>€2.50</Text>
        <Button>Add to cart</Button>
    </Card>
)

export const highlight = () => (
    <Card highlight>
        <Heading>Standard Coffee</Heading>
        <Text>€2.50</Text>
        <Button>Add to cart</Button>
    </Card>
)

