// Função para buscar os exercícios do servidor
export async function fetchExercicio() {
        try {
            const response = await fetch('../../buscarExercicio');

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
            
        } catch (error) {
            console.error("Erro ao buscar os exercícios:", error);
        }
}
