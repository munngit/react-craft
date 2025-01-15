// export default function app(){
//   return(
//     <>
//     <Hello name='conner'/>
//     <Hello name='daniel'/> 
//     <Hello/>
//     </>
//   )
// }
// function Hello({name='user'}){
//   return <h1>hello {name}</h1>
// }

export default function app(){
  return(
    <>
     <Comment username='ali' time={(new Date()).toString( )}>
     <h1>Hello world</h1>
     <p>this is a comment</p>
     </Comment>
    </>
  );

}
function Comment({username,time,children}){
  return(
    <section>
      <p>
        {username} commented on {time}
        {children}
      </p>
    </section>
  )

}