<!-- Old NextJS SSG in Particular Page -->
export const getStaticPaths = async () => {
    const data = await(await fetch()).json()
    const allUserIds = data.users.map((user) => user.id)

    return {
        paths: allUserIds.map((userId) => ({ params: {id : `${userId}`}})),
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const data - await(await fetch()).json()
    return {
        props: {
            data,
        }
    }
}

<!-- https://www.youtube.com/playlist?list=PLinedj3B30sDP2CHN5P0lDD64yYZ0Nn4J -->

<!-- SSG in NextJS New - ALL Blog Page -->
export const getQuotes = async () => {
    return await (await fetch("", {cache: "force-cache"})).json()
}

export page = async () => {
    const quotes = await getQuotes()
    return (
        <div>
            {quotes.map((quote, index) => {
                return <Link href={
                    pathname: "/blog",
                    query: {quote: quote}
                }>
                </Link>
            })}
        </div>
    )
}

<!-- SSG in NextJS New - Single Blog page -->


export page = async ({ searchParams }) => {
kf    return (
        <div>
            {searchParams.quote}
        </div>
    )
}

<!-- https://www.youtube.com/watch?v=joe7BxepVp8 -->
<!-- https://www.youtube.com/playlist?list=PLDtWoQ-cxqixo3Qo-0mz0WW6Fi3fFXNji -->


useSWR()