type PostUrlProps = {
    buttonLabel?: string;
}

const PostUrl = ({buttonLabel = "Grab Post"}: PostUrlProps) => {
    return (
        <div className="flex place-content-center">
            <div className="join mt-10">
                <input placeholder="Post ID / URL" className="input join-item w-96 input-bordered focus:outline-offset-0" defaultValue="" />
                <button className="btn join-item btn-primary rounded-md">
                    {buttonLabel}
                </button>
            </div>
        </div>
    );
    }

export default PostUrl;