//Default Exports 
function Post(){
    return <p>Post</p>
}


export default Post

// Default Exports Vs Named Exports 

// Default Exports: o nome da classe interna não precisa bater com o nome escolhido na importação 
// ex 

// // arquivo post:
// function Post(){
//     return <p>Post</p>
// }
// export default Post

// //arquivo de importação
// import PostsPrincipais from './Post'
//       <PostsPrincipais/>

// Named Exports : nome da classe tem que bater como o nome da importação
//ex 
// export function Post(){
    // return <p>Post</p>
// }
