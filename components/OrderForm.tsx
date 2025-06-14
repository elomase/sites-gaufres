import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

export default function OrderForm() {
    const [email, setEmail] = useState('');
    const [waffleType, setWaffleType] = useState('classique');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error } = await supabase
            .from('orders')
            .insert([
                {
                    email,
                    produit: waffleType,
                    date_commande: new Date().toISOString()
                }
            ]);

        if (error) {
            alert('Erreur lors de la commande');
        } else {
            alert('Commande effectuée avec succès !');
            setEmail('');
        }
    };

    return (
        <section className="order-section">
            <h2>Commander</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email :</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="waffle-type">Type de Gaufre :</label>
                <select
                    id="waffle-type"
                    value={waffleType}
                    onChange={(e) => setWaffleType(e.target.value)}
                    required
                >
                    <option value="classique">Gaufre Classique</option>
                    <option value="chocolat">Gaufre au Chocolat</option>
                    <option value="vanille">Gaufre à la Vanille</option>
                </select>

                <button type="submit">Commander</button>
            </form>
        </section>
    );
}
