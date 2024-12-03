const reservations = [
    { dataHora: "21/11/2024 14:00", final: "21/11/2024 15:00", responsavel: "Usuário123", tipo: "Reunião" },
    { dataHora: "22/11/2024 10:00", final: "22/11/2024 11:00", responsavel: "Usuário123", tipo: "Consulta" },
];

function renderReservations() {
    const tbody = document.getElementById('reservations');
    tbody.innerHTML = reservations.map(reservation => `
        <tr>
            <td>${reservation.dataHora}</td>
            <td>${reservation.final}</td>
            <td>${reservation.responsavel}</td>
            <td>${reservation.tipo}</td>
        </tr>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderReservations();
});
