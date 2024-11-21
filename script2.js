document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    // Validação simples
    if (nome === '' || email === '' || endereco === '' || telefone === '' || senha === '' || confirmarSenha === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (senha !== confirmarSenha) {
        alert('As senhas não correspondem.');
        return;
    }

    // Aqui você pode adicionar a lógica para registrar o usuário
    // Por exemplo, enviar uma requisição para o servidor com fetch ou XMLHttpRequest

    alert(`Cadastro realizado com sucesso!\nNome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}`);
    // Redirecionar para outra página ou realizar outra ação
});
