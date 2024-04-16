import PostItems from "./PostItems";

export default function Posts(){
    return(
        <div>
            <PostItems title="post one title" description="post one description" />
            <PostItems title="post two title" description="post two description" />
            <PostItems title="post three title" description="post three description" />
            <PostItems title="post four title" description="post four description" />
        </div>
    )
}