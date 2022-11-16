import { urlFetch } from "../constant";

const getGithubUser = async(user) => {
    const res = await fetch(`${urlFetch}/${user}`,{
        method: 'GET'
    })
    const data = await res.json()
    return data
}

export default getGithubUser