import Image from "next/image";
import { createClient } from "next-sanity";
import Product from "../../sanity/products";



const client = createClient({
  projectId: "yk2fesom",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false
});
export default async function Home() {
  const pets = await client.fetch(`*[_type == "pet"]`);
  const users = await client.fetch(`*[_type == "pet"]`);
  const products = await client.fetch(`*[_type == "products"]`);
  const image= await fetch("https://yk2fesom.api.sanity.io/v2023-08-12/data/query/production?query=*%5B_type+%3D%3D+%22pet%22%5D%0A%7B%22poster%22%3Aposter.asset+-%3E+url%7D")
  const img= (await image.json()).result
  // console.log(users);
  // console.log(pets);
  console.log(img)

  return (
 <div>
 <div>1
    
    <h1>Sanity</h1>
    {
      img?.map((pet: any,index:number)=>(
        <div key={index}>
          <img src={pet.poster}/>
          
          </div>
      ))
    }
    
    </div>

<div>2
    
<h1>Sanity 2</h1>
{
  products?.map((Product: any)=>(
    <div key={Product.id}>
      <p>{Product.name}</p>
      
      </div>
  ))
}

</div>
</div>

  );
}
