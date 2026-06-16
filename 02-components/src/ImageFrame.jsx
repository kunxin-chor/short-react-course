// when we put a component in its own file, usually (as a convention) the file name is the same as the component name
export default function ImageFrame(props) {
    return (
        <div style={{
            border: "2px solid black",
            borderRadius: "10px",
            padding: "10px",
            margin: "10px",
            display:"inline-block"
        }}>
            <img src={props.imageUrl} />
        </div>)
}