const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {
        title: formData.get('title'),
        category: formData.get('category'),
        img: formData.get('img'),
        video: formData.get('video'),
        howTo: formData.get('howTo')
    };

    try {
        const response = await fetch('/cadastrar-exercicio', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            })
            if (response.ok) {
                alert('Exercício cadastrado com sucesso!');
                form.reset();
            } else {
                alert('Opa, Erro ao cadastrar exercício. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao cadastrar exercício:', error);
            alert('Erro ao cadastrar exercício. Tente novamente.');
    }
});