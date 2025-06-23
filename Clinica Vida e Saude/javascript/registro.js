import React, { useState, useEffect } from 'react';

function Cadastro() {
  const [showPasswordMsg, setShowPasswordMsg] = useState(false);

  useEffect(() => {
    const senhaInput = document.getElementById('senha');
    const senhaMsg = document.getElementById('senha-msg');

    const handleFocus = () => {
      setShowPasswordMsg(true);
      senhaMsg.style.display = 'block';
    };

    const handleBlur = () => {
      setShowPasswordMsg(false);
      senhaMsg.style.display = 'none';
    };

    senhaInput.addEventListener('focus', handleFocus);
    senhaInput.addEventListener('blur', handleBlur);

    return () => {
      senhaInput.removeEventListener('focus', handleFocus);
      senhaInput.removeEventListener('blur', handleBlur);
    };
  }, []);

  return (
    <form>
      {/* ...outros campos... */}
      <label htmlFor="senha">Senha:</label>
      <input
        type="password"
        id="senha"
        name="senha"
      />
      {showPasswordMsg && (
        <div id="senha-msg" style={{ color: 'gray', fontSize: '0.9em' }}>
          A senha deve conter pelo menos 8 caracteres, uma letra maiúscula e um número.
        </div>
      )}
      {/* ...outros campos... */}
    </form>
  );
}

export default Cadastro;