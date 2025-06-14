import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Commandes() {
    const [commandes, setCommandes] = useState([]);

    useEffect(() => {
        async function fetchCommandes() {
            const { data, error } = await supabase
                .from('commandes')
                .select('id, gaufre_id, gaufres(nom, prix)');
            if (error) console.error(error);
            else setCommandes(data);
        }
        fetchCommandes();
    }, []);

    return (
        <Layout>
            <Head>
                <title>Mes Commandes - Délicieuses Gaufres</title>
                <meta name="description" content="Suivez vos commandes de gaufres" />
            </Head>
            <main className="container">
                <h1>Mes Commandes</h1>
                <div className="orders-list">
                    {commandes.length === 0 ? (
                        <p>Aucune commande pour le moment</p>
                    ) : (
                        <ul>
                            {commandes.map((commande) => (
                                <li key={commande.id} className="order-item">
                                    {commande.gaufres.nom} - {commande.gaufres.prix}€
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </main>
        </Layout>
    );
}
