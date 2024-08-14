import "./post.css";

export default function Post() {
    return (
        <div className="post">
            <img
                className="postImg"

                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOMW4V9pwRzqkEgzfoyfTDDBJdoWS-5wB5bQ&s"
                alt=""
            />
            <div className="postInfo">
                <div className="postCat">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Velit quaerat error, eius quidem illo minus est aliquid
                vitae consequatur beatae, deleniti quisquam placeat.
                Nobis quod numquam ea explicabo temporibus ad?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Velit quaerat error, eius quidem illo minus est aliquid
                vitae consequatur beatae, deleniti quisquam placeat.
                Nobis quod numquam ea explicabo temporibus ad?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Velit quaerat error, eius quidem illo minus est aliquid
                vitae consequatur beatae, deleniti quisquam placeat.
                Nobis quod numquam ea explicabo temporibus ad?

            </p>
        </div>
    );
}
