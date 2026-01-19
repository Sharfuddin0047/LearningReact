import DrillingNestedChild from "./DrillingNestedChild";

const DrillingChild = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Drilling Child</h1>
            <DrillingNestedChild data1={props.data1} />
        </div>
    );
};

export default DrillingChild;