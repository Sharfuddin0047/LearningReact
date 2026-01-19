import DrillingChild from "./DrillingChild";

const DrillingParent = () => {
    let data1 = "Hello World"
    return (
        <div>
            <h1>Drilling Parent</h1>
            <DrillingChild data1={data1} />
        </div>
    );
};

export default DrillingParent;