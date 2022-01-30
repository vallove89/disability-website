import CardItemWithPhoto from "../../components/CardItemWithPhoto";
import PostPagination from "../../components/PostPagination";
import { Config } from "../../utils/Config";
import clientPromise from "../../utils/dbConnect";


const Page = ({ parking, totalPages, currentPage }) => {
 
  return (
    <>
        {parking.map(item => {
          return (
            <CardItemWithPhoto
              key={item._id}
              title={item.title}
              description={item.description}
              url={item.url}
            />
          )
        })}
        <PostPagination 
            totalPages={totalPages}
            currentPage={currentPage}
            directoryUrl="ada-comliance"
            homeUrl='/'
        />
    </>
  )
}

export async function getStaticPaths() {
    const client = await clientPromise;

    const db = client.db("myFirstDatabase");

    const count = await db.collection("failures").find({}).count()

    const totalItems = count ? count : 0;
    const totalPages = Math.ceil(totalItems / Config.pagination.pageSize);

    const paths = []; 

    for (let page = 1; page <= totalPages; page++) {
        paths.push({ params: { id: page.toString() }});
    }

    return {
        paths,
        fallback: false,
    };
}



export async function getStaticProps({ params }){
    const skipMultiplier = parseInt(params.id) === 1 ? 0 : params.id - 1;
    const skip = skipMultiplier > 0 ? skipMultiplier * Config.pagination.pageSize : 0;

    const client = await clientPromise;

    const db = client.db("myFirstDatabase");

    const count = await db.collection("failures").find({}).count();  
    const totalItems = count ? count : 0;
    const totalPages = Math.ceil(totalItems / Config.pagination.pageSize);

    let data = await db.collection("failures").find({}).skip(skip).limit(Config.pagination.pageSize).toArray();
    data = JSON.parse(JSON.stringify(data));
    


  return { 
    props: { 
      parking: data,
      totalPages: totalPages,
      currentPage: params.id, 
    },
  };
}

export default Page;