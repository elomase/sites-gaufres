import Layout from '../components/Layout';
import OrderForm from '../components/OrderForm';
import Head from 'next/head';

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Délicieuses Gaufres</title>
                <meta name="description" content="Commandez les meilleures gaufres en ligne" />
            </Head>
            <main className="container">
                <section className="products">
                    <h2>Nos Gaufres</h2>
                    <div className="product-grid">
                        <div className="product-card">
                            <h3>Gaufre Classique</h3>
                            <p className="price">2.50€</p>
                            <p className="description">Notre délicieuse gaufre traditionnelle au sucre</p>
                        </div>
                    </div>
                </section>
                <OrderForm />
            </main>
        </Layout>
    );
}
