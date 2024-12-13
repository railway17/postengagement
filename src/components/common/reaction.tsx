import { useCallback } from "react";
import Badge from "./badge";
import getReactionArr from "../../utils/helpers/reaction-utils";

export type ReactionProps = {
    reactionType: string;
    reactions: Array<{ key: string, label: string }>;
    setReactions: React.Dispatch<Array<{ key: string, label: string }>>
}

const Reaction = ({ reactionType, reactions, setReactions }: ReactionProps) => {
    
    const handleSelection = useCallback((reaction: { key: string, label: string }) => {
        if (reactions.map(el => el.key).includes(reaction.key)) {
            return;
        }
        setReactions([...reactions, reaction]);
    }, [reactions, setReactions]);

    const handleCloseBadge = useCallback((idx: number) => {
        const res = reactions.filter((el, index) => index !== idx);
        setReactions(res);
    }, [reactions, setReactions]);

    return (
        <>
        <div className="mb-2">
            {reactions.map((reaction, idx) => {
            return (
                <Badge
                    reaction={reaction}
                    label={reaction.label}
                    key={reaction + "|" + idx}
                    onClose={() => handleCloseBadge(idx)}
                />
            );
            })}
        </div>


        <span id={`add_${reactionType}_reaction`} className="block">
            <ul className={`${reactionType} reactions-box`}>
            {
                getReactionArr(reactionType).map((reaction) => {
                return (
                    <li
                        key={reaction.key}
                        className={`reaction ${reaction.key}`}
                        onClick={() => handleSelection(reaction)}
                    />
                );
                })
            }
            </ul>

            <button className="btn btn-primary w-full rounded-md">
                Require reaction
            </button>
        </span>
        </>
    );
}

export default Reaction;