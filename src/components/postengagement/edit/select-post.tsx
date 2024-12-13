type PostProps = {
    title?: string;
}
const SelectPost = ({ title = "Select A Post"}: PostProps) => {
    return (
        <div className="flex place-content-center">
            <br />
            {title}
        </div>
    );
}

export default SelectPost;