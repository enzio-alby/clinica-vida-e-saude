// Estrutura HTML + CSS básica com acessibilidade para as 4 telas solicitadas
// Frameworks não incluídos para facilitar visualização e edição simples

// 1. Tela de Login
const loginScreen = `
  <div class="container">
    <header>
      <h1>Hospital Vida e Saúde</h1>
    </header>
    <h2>Central de Agendamento</h2>
    <form>
      <label for="cpf">CPF*</label>
      <input type="text" id="cpf" name="cpf" required placeholder="Digite seu CPF">
      <label for="senha">Senha*</label>
      <input type="password" id="senha" name="senha" required placeholder="Digite sua senha">
      <button type="submit" onclick="location.href='dashboard.html'; return false;">Agendar Online</button>
      <a href="#">Esqueceu sua senha?</a>
    </form>
    <hr />
    <p>Se essa é sua primeira vez, clique abaixo:</p>
    <button onclick="location.href='register.html'">Cadastrar e Marcar Online</button>
    <br><br>
    <button onclick="location.href='consultas.html'">Ver Consultas Marcadas</button>
  </div>
`;

// 2. Tela de Cadastro
const registerScreen = `
  <div class="container">
    <h2>Cadastro</h2>
    <form>
      <label for="nome">Nome Completo*</label>
      <input type="text" id="nome" name="nome" required>
      <label for="email">Email*</label>
      <input type="email" id="email" name="email" required>
      <label for="telefone">Telefone*</label>
      <input type="tel" id="telefone" name="telefone" required>
      <label for="cpf">CPF*</label>
      <input type="text" id="cpf" name="cpf" required>
      <label for="senha">Senha*</label>
      <input type="password" id="senha" name="senha" required>
      <label for="confirmar">Confirmar Senha*</label>
      <input type="password" id="confirmar" name="confirmar" required>
      <button type="submit">Cadastrar</button>
    </form>
    <br>
    <button onclick="location.href='login.html'">Voltar ao Login</button>
  </div>
`;

// 3. Tela de Marcação de Consulta
const agendamentoScreen = `
  <div class="container">
    <h2>Agendar Consulta</h2>
    <form>
      <label for="especialidade">Especialidade*</label>
      <select id="especialidade" name="especialidade" required>
        <option value="">Selecione</option>
        <option value="cardiologia">Cardiologia</option>
        <option value="ortopedia">Ortopedia</option>
        <option value="neurologia">Neurologia</option>
      </select>
      <label for="medico">Médico*</label>
      <select id="medico" name="medico" required>
        <option value="">Selecione um médico</option>
      </select>
      <label for="data">Data*</label>
      <input type="date" id="data" name="data" required>
      <label for="hora">Horário*</label>
      <input type="time" id="hora" name="hora" required>
      <button type="submit">Confirmar Consulta</button>
    </form>
    <br>
    <button onclick="location.href='home.html'">Voltar</button>
  </div>
`;

// 4. Tela Inicial
const homeScreen = `
  <div class="container" style="background-image: url('https://images.unsplash.com/photo-1588776814546-ec7e109f1c2c'); background-size: cover; background-position: center;">
    <nav>
      <a href="home.html">Início</a>
      <a href="agendamento.html">Consultas</a>
      <a href="login.html">Login</a>
      <a href="register.html">Cadastro</a>
    </nav>
    <main>
      <h2 style="color: #fff; text-shadow: 1px 1px 2px #000;">Bem-vindo à Clínica Vida</h2>
      <p style="color: #fff; text-shadow: 1px 1px 2px #000;">Agende consultas com rapidez, autonomia e acessibilidade.</p>
      <button onclick="location.href='agendamento.html'">Agendar Agora</button>
      <div class="acessibilidade-floating">
        <button title="Aumentar Fonte">A+</button>
        <button title="Modo Contraste">🌙</button>
        <button title="Leitor de Tela">🔊</button>
      </div>
    </main>
  </div>
`;

// 5. Tela de Consultas Marcadas (fictícia)
const consultasMarcadasScreen = `
  <div class="container">
    <h2>Consultas Marcadas</h2>
    <p>Você ainda não possui consultas marcadas.</p>
    <button onclick="location.href='home.html'">Voltar</button>
  </div>
`;

// 6. Tela Dashboard já logado (Admin fictício)
const dashboardScreen = `
  <div class="container">
    <h2>Olá, Admin!</h2>
    <section>
      <h3>Últimas Notícias</h3>
      <ul>
        <li>🩺 Novo especialista em Geriatria disponível a partir de abril.</li>
        <li>💉 Campanha de vacinação gratuita começa na próxima semana.</li>
      </ul>
    </section>
    <section>
      <h3>Minhas Consultas</h3>
      <ul>
        <li>Consulta com Dr. João Silva - Cardiologia - 25/03/2025 às 10h</li>
        <li>Consulta com Dra. Maria Lima - Ortopedia - 30/03/2025 às 14h</li>
      </ul>
    </section>
    <section>
      <h3>Calendário</h3>
      <p>[Mini calendário visual pode ser integrado futuramente]</p>
    </section>
    <section>
      <h3>Serviços</h3>
      <ul>
        <li>Agendamento Online</li>
        <li>Histórico Médico</li>
        <li>Contato com Suporte</li>
      </ul>
    </section>
    <button onclick="location.href='login.html'">Sair</button>
  </div>
`;

// Navegação básica - já corrigida para arquivos separados
window.onload = () => {
  location.href = 'login.html';
};