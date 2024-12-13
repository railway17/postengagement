import React from "react";
import Keywords from "./keywords";
import Select from "../../common/select";
import { MESSAGE_FLOWS, MESSAGE_TYPES, TEXT_CARDS } from "../../../constants";
import SubHeader from "./sub-header";
import Reaction from "../../common/reaction";
import {
    Action,
    usePostEngagementEditContext,
    usePostEngagementEditDispatchContext,
} from "utils/contexts/engagement-context";

const PostSettings = () => {
    const {
        textCard,
        messageType,
        messageFlow,
        excludeKeywords,
        triggerKeywords,
        positiveReactions,
        excludeKeywordVal,
        triggerKeywordVal,
    } = usePostEngagementEditContext();

    const dispatch = usePostEngagementEditDispatchContext();

    const onUpdate = <T extends Action["type"]>(
        type: T,
        payload: any
    ) => {
        dispatch({ type, payload });
    };
    

    return (
        <>
            <div className="flex flex-row items-center justify-between">
                <div className="opacity-60">
                    Enable To Privately Reply To First-Level Comments Only
                </div>
                <div>
                    <input type="checkbox" className="toggle toggle-primary" />
                </div>
            </div>

            <div className="flex flex-row items-center justify-between">
                <div className="opacity-60">
                    Send Message To The Same User Only Once Per Post
                </div>
                <div>
                    <input type="checkbox" className="toggle toggle-primary" />
                </div>
            </div>

            <br />

            <SubHeader>Require a Post Reaction</SubHeader>

            <br />

            <Reaction
                reactionType="positive"
                reactions={positiveReactions}
                setReactions={(data) =>
                onUpdate("SET_POSITIVEREACTIONS", data)
                }
            />

            <br />

            <Keywords
                value={excludeKeywordVal || ""}
                keywords={excludeKeywords || []}
                setValue={(data) =>
                    onUpdate("SET_EXCLUDEKEYWORDVAL", data)
                }
                setKeywords={(data) =>
                    onUpdate("SET_EXCLUDEKEYWORDS", data)
                }
                header="Exclude Comments With These Keywords"
            />

            <br />

            <Keywords
                value={triggerKeywordVal || ""}
                keywords={triggerKeywords || []}
                setValue={(data) =>
                    onUpdate("SET_TRIGGERKEYWORDVAL", data)
                }
                setKeywords={(data) =>
                    onUpdate("SET_TRIGGERKEYWORDS", data)
                }
                header="Only Trigger For Comments With These Keywords"
            />

            <br />

            <SubHeader>Private Reply After Post Engagement</SubHeader>

            <Select
                value={messageType}
                options={MESSAGE_TYPES}
                onSelect={(data) => onUpdate("SET_MESSAGETYPE", data)}
                label="Select message type"
            />

            <Select
                includeSelect
                label="Select Flow"
                value={messageFlow}
                options={MESSAGE_FLOWS}
                onSelect={(data) => onUpdate("SET_MESSAGEFLOW", data)}
            />

            {messageType?.value === "single-message" && (
                <Select
                    value={textCard}
                    options={TEXT_CARDS}
                    label="Select Message"
                    onSelect={(data) => onUpdate("SET_TEXTCARD", data)}
                />
            )}
        </>
    );
};

export default PostSettings;
