document.getElementById('order-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value; // Récupérer l'email
    const waffleType = document.getElementById('waffle-type')?.value || 'classique'; // Default to 'classique' if not present
    const quantity = parseInt(document.getElementById('quantity').value, 10);
    const dateCommande = new Date().toISOString();

    const orderData = {
        id: `${Date.now()}`, // Utiliser un timestamp comme ID unique
        email: email,
        produit: `${quantity} x ${waffleType}`,
        date_commande: dateCommande,
    };

    try {
        const response = await fetch('https://ituwsaslryuvuiielmot.supabase.co/rest/v1/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0dXdzYXNscnl1dnVpaWVsbW90Iiwicm9zZSI6ImFub24iLCJpYXQiOjE3NDk5MDI0OTcsImV4cCI6MjA2NTQ3ODQ5N30.t1C6C_xBRM52UpQYwFDIVe1zVXrSy45JN8JSd9Sm4Ko',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0dXdzYXNscnl1dnVpaWVsbW90Iiwicm9zZSI6ImFub24iLCJpYXQiOjE3NDk5MDI0OTcsImV4cCI6MjA2NTQ3ODQ5N30.t1C6C_xBRM52UpQYwFDIVe1zVXrSy45JN8JSd9Sm4Ko',
            },
            body: JSON.stringify(orderData),
        });

        if (response.ok) {
            alert('Commande enregistrée avec succès dans Supabase !');
        } else {
            alert('Erreur lors de l\'enregistrement de la commande dans Supabase.');
        }
    } catch (error) {
        console.error('Erreur:', error);
        alert('Une erreur est survenue. Veuillez réessayer.');
    }
});

async function fetchOrders() {
    try {
        const response = await fetch('https://ituwsaslryuvuiielmot.supabase.co/rest/v1/orders', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0dXdzYXNscnl1dnVpaWVsbW90Iiwicm9zZSI6ImFub24iLCJpYXQiOjE3NDk5MDI0OTcsImV4cCI6MjA2NTQ3ODQ5N30.t1C6C_xBRM52UpQYwFDIVe1zVXrSy45JN8JSd9Sm4Ko',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0dXdzYXNscnl1dnVpaWVsbW90Iiwicm9zZSI6ImFub24iLCJpYXQiOjE3NDk5MDI0OTcsImV4cCI6MjA2NTQ3ODQ5N30.t1C6C_xBRM52UpQYwFDIVe1zVXrSy45JN8JSd9Sm4Ko',
            },
        });

        if (response.ok) {
            const orders = await response.json();
            const ordersContainer = document.getElementById('orders-container');
            ordersContainer.innerHTML = ''; // Clear existing orders

            orders.forEach(order => {
                const orderItem = document.createElement('li');
                orderItem.textContent = `${order.date_commande}: ${order.produit} (${order.email})`;
                ordersContainer.appendChild(orderItem);
            });
        } else {
            console.error('Erreur lors de la récupération des commandes.');
        }
    } catch (error) {
        console.error('Erreur:', error);
    }
}

// Appeler fetchOrders au chargement de la page
document.addEventListener('DOMContentLoaded', fetchOrders);
document.addEventListener('DOMContentLoaded', fetchOrders);
