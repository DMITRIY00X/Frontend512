import "./MusicBlocks.css";

function MusicBlocks(props) {
    let { title } = props;
    return (
        <div className="MusicBlocks">
            <h1>{title}</h1>
        </div>
    )
}
export default MusicBlocks;