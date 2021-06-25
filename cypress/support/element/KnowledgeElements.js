class KnowledgeElements {
    inputEmail = () => {
        let inputEmail = "input[id='txEmailLogin']"
        return inputEmail
    }
    inputSenha = () => {
        let inputSenha = "input[id='txSenhaLogin']"
        return inputSenha
    }
    inputSubmit = () => {
        let inputSubmit = "input[name='submit-login-usuario']"
        return inputSubmit
    }

    
    
    btnEntrar = () => {
        let btnEntrar =  "a[href='login.php']";
        return btnEntrar;
    }
    btnRecuperarSenha = () => {
        let btnRecuperarSenha = ".recuperar-senha";
        return btnRecuperarSenha;
    }
    inputEmailRecuperar = () => {
        let inputEmail = "input[id='txEmail']";
        return inputEmail;
    }
    btnEnviarEmail = () => {
        let btnEnviarEmail = "form[class='form-recuperar-senha']";
        return btnEnviarEmail;
    }
    txSucess = () => {
        let messageSucess = "p[class='sucess']";
        return messageSucess;
    }
    txFail = () => {
        let messageFail = "p[class='fail']";
        return messageFail;
    }


    botaoSobreNos = () => {
        let btnSobreNos = "a[href='sobre-nos.php']";
        return btnSobreNos;
    }
    botaoEntrar = () => {
        let btnEntrar = "a[href='login.php']";
        return btnEntrar;
    }
    imgLogin = () => {
        let imgLogin = "img[src='../../assets/img/icon_student.png']";
        return imgLogin;
    }


    inputUserAdmin = () => {
        let inputUser = "input[name='txUser']"
        return inputUser
    }
    inputSenhaAdmin = () => {
        let inputSenha = "input[name='txSenha']"
        return inputSenha
    }
    buttonLoginAdmin = () => {
        let inputSubmit = "input[name='login']"
        return inputSubmit
    }

    

    inputNomeCadastro = () => {
        let inputNome = "input[name='txNome']";
        return inputNome;
    }
    inputEmailCadastro = () => {
        let inputEmail = "input[name='txEmail']";
        return inputEmail;
    }
    inputSenhaCadastro = () => {
        let inputSenha = "input[name='txSenha']";
        return inputSenha;
    }
    formCriarConta = () => {
        let btnCriarConta = "form";
        return btnCriarConta;
    }
    inputSobrenomeCadastro = () => {
        let inputSobrenome = "input[name='txSobrenome']";
        return inputSobrenome;
    }
    inputCpfCadastro = () => {
        let inputCpf = "input[name='txCPF']";
        return inputCpf;
    }
    formCadastrar = () => {
        let btnCadastrar = "input[name='submit-cadastro-usuario']";
        return btnCadastrar;
    }
}

export default KnowledgeElements