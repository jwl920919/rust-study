(() => {
  'use strict';
  if (document.getElementById('rust-code-lab')) return;

  const style = document.createElement('style');
  style.textContent = '';
  const root = document.createElement('div');
  root.id = 'rust-code-lab';
  root.innerHTML = `
    <button class="rcl-launch" type="button" aria-expanded="false" aria-controls="rcl-panel">코드 실험실</button>
    <section class="rcl-panel" id="rcl-panel" aria-label="Rust 코드 실험실" hidden>
      <header class="rcl-header"><div><h2>Rust 코드 실험실</h2><p>예제를 고치거나 새 코드를 써서 바로 실행해 보세요.</p></div><button class="rcl-close" type="button" aria-label="실험실 닫기">닫기</button></header>
      <div class="rcl-toolbar"><label for="rcl-edition">에디션</label><select id="rcl-edition"><option>2024</option><option>2021</option><option>2018</option><option>2015</option></select><span class="rcl-shortcut">Ctrl + Enter로 실행</span></div>
      <label class="rcl-sr-only" for="rcl-editor">Rust 코드</label><textarea id="rcl-editor" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off" aria-describedby="rcl-help">fn main() {
    println!("안녕하세요, Rust!");
}</textarea>
      <div class="rcl-actions"><button class="rcl-run" type="button">실행</button><button class="rcl-reset" type="button">예제 코드로 되돌리기</button><a class="rcl-external" target="_blank" rel="noopener noreferrer">공식 Playground에서 열기</a></div>
      <p class="rcl-help" id="rcl-help">실행에는 인터넷 연결이 필요합니다. 코드는 공식 Rust Playground에서 컴파일·실행됩니다.</p>
      <pre class="rcl-output" aria-live="polite" aria-label="실행 결과">실행 결과가 여기에 표시됩니다.</pre>
    </section>`;
  document.body.append(root);

  const launch = root.querySelector('.rcl-launch');
  const panel = root.querySelector('.rcl-panel');
  const editor = root.querySelector('#rcl-editor');
  const edition = root.querySelector('#rcl-edition');
  const output = root.querySelector('.rcl-output');
  const run = root.querySelector('.rcl-run');
  const external = root.querySelector('.rcl-external');
  const starter = editor.value;
  let lastLoaded = starter;
  let requestController = null;

  function syncExternalLink() {
    const url = new URL('https://play.rust-lang.org/');
    url.searchParams.set('version', 'stable');
    url.searchParams.set('mode', 'debug');
    url.searchParams.set('edition', edition.value);
    url.searchParams.set('code', editor.value);
    external.href = url.toString();
  }
  function openPanel() {
    panel.hidden = false;
    launch.setAttribute('aria-expanded', 'true');
    requestAnimationFrame(() => editor.focus());
  }
  function closePanel() {
    panel.hidden = true;
    launch.setAttribute('aria-expanded', 'false');
    launch.focus();
  }
  launch.addEventListener('click', () => panel.hidden ? openPanel() : closePanel());
  root.querySelector('.rcl-close').addEventListener('click', closePanel);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !panel.hidden) closePanel();
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter' && !panel.hidden) {
      event.preventDefault(); run.click();
    }
  });
  editor.addEventListener('input', syncExternalLink);
  edition.addEventListener('change', syncExternalLink);

  document.querySelectorAll('pre.playground code.language-rust').forEach(code => {
    const pre = code.closest('pre');
    const action = document.createElement('div');
    action.className = 'rcl-code-action';
    const load = document.createElement('button');
    load.type = 'button';
    load.className = 'rcl-load';
    load.textContent = '실험실에서 편집';
    load.setAttribute('aria-label', '이 예제를 코드 실험실에서 편집하고 실행');
    action.append(load);
    pre.insertAdjacentElement('afterend', action);
    load.addEventListener('click', () => {
      editor.value = code.textContent;
      lastLoaded = code.textContent;
      const found = Array.from(code.classList).find(name => /^edition\d{4}$/.test(name));
      if (found) edition.value = found.slice(7);
      output.textContent = '예제를 불러왔습니다. 코드를 바꾼 뒤 실행을 누르세요.';
      syncExternalLink(); openPanel();
    });
  });

  root.querySelector('.rcl-reset').addEventListener('click', () => {
    editor.value = lastLoaded;
    output.textContent = '불러온 예제 코드로 되돌렸습니다.';
    syncExternalLink(); editor.focus();
  });
  run.addEventListener('click', async () => {
    if (requestController) requestController.abort();
    requestController = new AbortController();
    const timeout = setTimeout(() => requestController.abort(), 35000);
    run.disabled = true;
    run.textContent = '실행 중…';
    output.textContent = '공식 Rust Playground에서 컴파일하고 있습니다…';
    syncExternalLink();
    try {
      const response = await fetch('https://play.rust-lang.org/evaluate.json', {
        method: 'POST', mode: 'cors', signal: requestController.signal,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({version: 'stable', optimize: '0', code: editor.value, edition: edition.value})
      });
      if (!response.ok) throw new Error(`Playground 응답 오류 (${response.status})`);
      const result = await response.json();
      if (typeof result.result !== 'string') throw new Error(result.error || '실행 결과를 읽지 못했습니다.');
      output.textContent = result.result.trim() ? result.result : '출력 없음. 컴파일과 실행은 완료됐습니다.';
    } catch (error) {
      output.textContent = error.name === 'AbortError'
        ? '요청 시간이 초과됐거나 취소됐습니다. 코드를 줄여 다시 실행해 보세요. 공식 Playground에서 열 수도 있습니다.'
        : `실행할 수 없습니다: ${error.message}\n\n인터넷 연결을 확인하거나 “공식 Playground에서 열기”를 사용하세요.`;
    } finally {
      clearTimeout(timeout); requestController = null;
      run.disabled = false; run.textContent = '실행';
    }
  });
  syncExternalLink();
})();
