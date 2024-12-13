import React, { useCallback } from "react";
import Comments from "./comments";
import Select from "../../common/select";
import SubHeader from "./sub-header";
import { ASSISTANCE_TYPES, COMMENT_TYPES, INTEGRATION_TYPES } from "../../../constants";
import {
  Action,
  usePostEngagementEditContext,
  usePostEngagementEditDispatchContext,
} from "../../../utils/contexts/engagement-context";

const AutoResponse = () => {
    const {
        comments,
        commentType,
        assistanceType,
        integrationType,
    } = usePostEngagementEditContext();

    const dispatch = usePostEngagementEditDispatchContext();

    const onUpdate = useCallback(
        <T extends Action["type"]>(type: T, payload: any) => {
            dispatch({ type, payload });
        },
        [dispatch]
    );

    const renderOpenAIOptions = () => (
        <>
            <Select
                label="Select Integration"
                value={integrationType}
                options={INTEGRATION_TYPES}
                onSelect={(data) => onUpdate("SET_INTEGRATIONTYPE", data)}
            />
            <Select
                value={assistanceType}
                label="Select Assistance"
                options={ASSISTANCE_TYPES}
                onSelect={(data) => onUpdate("SET_ASSISTANCETYPE", data)}
            />
        </>
    );

    const renderStaticComments = () => (
        <Comments
            comments={comments}
            setComments={(data) => onUpdate("SET_COMMENT", data)}
        />
    );

    return (
        <>
            <div className="flex flex-row items-center justify-between">
                <div className="opacity-60">Enable To Automatically Like Comments</div>
                <div><input type="checkbox" className="toggle toggle-primary" /></div>
            </div>

            <br />

            <SubHeader>Reply In Comments</SubHeader>

            <Select
                label="Comment type"
                value={commentType}
                options={COMMENT_TYPES}
                onSelect={(data) => onUpdate("SET_COMMENTTYPE", data)}
            />

            {commentType.value === "openai" && renderOpenAIOptions()}
            {commentType.value === "static" && renderStaticComments()}
        </>
    );
};

export default AutoResponse;
