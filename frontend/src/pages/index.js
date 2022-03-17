import Head from 'next/head'
import Form from '@/components/Form'
import axios from '@/lib/axios'
import GeneratePDF from '@/components/GeneratePDF'
export default function Home(props) {
    return (
        <>
            <Head>
                <title>WaveProjects Assignment </title>
            </Head>
            <div>
                <Form products={props.products} />
            </div>
            <GeneratePDF leads={props.leads}/>
        </>
    )
}

export async function getStaticProps() {
    try {
        const productResponse = await axios.get('/api/products')
        const leadsResponse = await axios.get('/api/leads')
        return {
            props: {
                products: productResponse.data,
                leads: leadsResponse.data,
            },
        }
    } catch (error) {
        console.log(error)
    }
}
