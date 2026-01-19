import { useState } from "react";

const Dropdown = () => {
    const [toggle, setToggle] = useState(false);
return (
    <div>
        <h1>Drop-Down Task</h1>
        <button onClick={() => setToggle(!toggle)}>{toggle ? "Hide" : "Show"}</button>
        {toggle && <p2>
            <mark>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat harum aspernatur doloremque numquam! Quasi pariatur aperiam qui mollitia, dolore praesentium distinctio, fuga accusantium amet sit error, nulla minima vitae?
                Officia excepturi sapiente maiores voluptatibus natus labore tempora explicabo ducimus? Ducimus commodi, tenetur nihil ullam odio alias dolore reprehenderit numquam molestias aliquid explicabo atque iste sapiente dolorem nisi quas? Labore!
                Dicta omnis nesciunt quae quos officia laudantium quis cupiditate provident rem laboriosam quaerat quas vel ratione ex quam minus corrupti enim itaque, odit dolores at explicabo cum modi. Incidunt, excepturi!
                Illo laborum distinctio provident pariatur in ut quod voluptatum nihil labore ducimus quisquam nam veritatis dolor veniam nisi perferendis temporibus sit, obcaecati qui consequuntur quia dolorem? Ut nobis adipisci quisquam.
                Ex, repudiandae. Magnam pariatur libero debitis ipsum praesentium repellat alias doloribus totam. Veritatis, voluptas? Ipsum non, explicabo rerum architecto praesentium optio sapiente animi sed repudiandae? Ipsa accusantium numquam eius error.
            </mark>
        </p2 >}
    </div >
);
};

export default Dropdown;