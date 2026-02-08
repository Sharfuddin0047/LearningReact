import { memo } from "react";

const MemoChild = (props) => {
  console.log("Memo Child");
  return (
    <div>
      <h1>Memo Child</h1>
    </div>
  );
};

export default memo(MemoChild);
