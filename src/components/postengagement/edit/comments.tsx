import { memo, useCallback } from "react";
import { STATIC_COMMENTS_HARD_LIMIT } from "../../../constants";

type Comment = { value: string };

type CommentsProps = {
    comments: Array<Comment>;
    setComments: React.Dispatch<React.SetStateAction<Array<Comment>>>;
};

// Single Comment Item Component (memoized for performance)
const CommentItem = memo(
    ({
        comment,
        index,
        onValueChange,
        onDelete,
    }: {
        comment: Comment;
        index: number;
        onValueChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
        onDelete: (index: number) => void;
    }) => (
        <div
        className="bg-base-200 p-2 rounded-md border border-dotted border-base-300 mb-2"
        >
            <div className="flex flex-row items-center gap-2">
                <input
                    type="text"
                    value={comment.value}
                    placeholder="Type your comment here"
                    onChange={(e) => onValueChange(e, index)}
                    className="input w-full focus:outline-offset-0"
                />
                <button
                    className="btn btn-sm btn-circle btn-ghost"
                    onClick={() => onDelete(index)}
                >
                ✕
                </button>
            </div>
        </div>
    )
    );

    const Comments = ({ comments, setComments }: CommentsProps) => {
    const handleDeleteComment = useCallback((index: number) => {
        setComments((prev) => prev.filter((_, idx) => idx !== index));
    }, [setComments]);

    const handleValueChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        setComments((prev) => {
            const newComments = [...prev];
            newComments[index].value = e.target.value;
            return newComments;
        });
    }, [setComments]);

    const handleAddComment = useCallback(() => {
        setComments((prev) => {
            if (prev.length >= STATIC_COMMENTS_HARD_LIMIT) return prev;
            return [...prev, { value: "" }];
        });
    }, [setComments]);

    return (
        <div className="text-center">
        <br />
        {comments.map((comment, index) => (
            <CommentItem
                key={index}
                comment={comment}
                index={index}
                onValueChange={handleValueChange}
                onDelete={handleDeleteComment}
            />
        ))}

        <br />

        {comments.length < STATIC_COMMENTS_HARD_LIMIT && (
            <button className="btn btn-primary rounded-md" onClick={handleAddComment}>
                Add Comment
            </button>
        )}
        </div>
    );
};

export default Comments;
