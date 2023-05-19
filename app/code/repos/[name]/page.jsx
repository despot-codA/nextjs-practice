import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import Link from "next/link";

const RepoPage = ({params: {name}}) => {
  return (
    <div className="card">
        <Link href="/code/repos" className="btn btn-back"> Back To Repositories </Link>
        <Repo name={name}></Repo>
        <RepoDirs name={name}></RepoDirs>
    </div>
  )
}

export default RepoPage