import ChildComp2 from "./ChildComp2";

const ChildComp1 = () => {
    return (
        <div>
            <h1>Child 1 Component</h1>
            <ChildComp2 />
        </div>
    );
};

export default ChildComp1;