const DrillingNestedChild = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Drilling Nested Child {props.data1}</h1>
        </div>
    );
};

export default DrillingNestedChild;