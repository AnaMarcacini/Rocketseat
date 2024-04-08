
// export default function Home(props: any) {
//   return (
//     <div>
//       <h1>{JSON.stringify(props)}</h1> {/* {"params":{"id":"ana"},"searchParams":{}} */}
//       <h1>OutraRota2</h1>
//     </div>
//   );
// }

interface ProductProps {
  params: {
    id: string[]
  }
}



export default function Home(props: ProductProps) {
  return (
    <div>
      <h1>OutraRota {props.params.id}</h1>
    </div>
  );
}
