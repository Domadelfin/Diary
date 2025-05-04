import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./usefetch";

const  BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
    const Navigate = useNavigate();

    const handleUpdate = () => {
        const updatedBlog = { ...blog, title: "Updated Title", body: "Updated Body" };
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedBlog)
        }).then(() => {
            console.log('Blog updated');
        });
    };

    const handleDelete =() => {
        fetch ('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            Navigate('/');
        })
    }


    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written on { blog.date }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleDelete}>Delete</button>
                    <button onClick={handleUpdate}>Update</button>
                </article>
            )}
        </div>
     );
}
 
export default  BlogDetails;