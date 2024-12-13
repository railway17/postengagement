import { ReactionsType } from "../../types/global";
import { POSITIVE_REACTIONS } from "../../constants/index";

const getReactionArr = (key: string): ReactionsType => {
    switch (key) {
        case "positive":
            return POSITIVE_REACTIONS;
        case "negative":
            return [];
        default:
            return POSITIVE_REACTIONS;
    }
};

export default getReactionArr;
