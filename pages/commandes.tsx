import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

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
        <html>
            <head>
                <title>Mes Commandes</title>
            </head>
            <body>
                <h1>Mes Commandes</h1>
                <ul>
                    {commandes.map((commande) => (
                        <li key={commande.id}>
                            {commande.gaufres.nom} - {commande.gaufres.prix}€
                        </li>
                    ))}
                </ul>
            </body>
        </html>
    );
}
