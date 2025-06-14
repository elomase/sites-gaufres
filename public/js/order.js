document.getElementById('order-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const waffleType = document.getElementById('waffle-type').value;
    const quantity = parseInt(document.getElementById('quantity').value, 10);
    const pickupTime = document.getElementById('pickup-time').value;

    const orderData = {
        waffle_type: waffleType,
        quantity: quantity,
        pickup_time: pickupTime,
    };

    try {
        const response = await fetch('https://your-supabase-url.supabase.co/rest/v1/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': 'your-supabase-api-key',
                'Authorization': 'Bearer your-supabase-api-key',
            },
            body: JSON.stringify(orderData),
        });

        if (response.ok) {
            alert('Commande enregistrée avec succès !');
        } else {
            alert('Erreur lors de l\'enregistrement de la commande.');
        }
    } catch (error) {
        console.error('Erreur:', error);
        alert('Une erreur est survenue. Veuillez réessayer.');
    }
});
