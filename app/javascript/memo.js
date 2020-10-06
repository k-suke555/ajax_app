function memo() {
  const submit = document.getElementById("submit"); //index.html.rbからid:submitの「投稿する」ボタンの情報取得
  submit.addEventListener("click", (e) => { //投稿するボタンをclickした場合に実行される
    const formData = new FormData(document.getElementById("form")); 
    const XHR = new XMLHttpRequest(); //非同期通信を実装するためのオブジェクト
    XHR.open("POST", "/posts", true); //openでリクエストを初期化
    XHR.responseType = "json"; //返却されるデータ形式をJSONに指定
    XHR.send(formData);
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }
      const item = XHR.response.post; //itemはレスポンスとして返却されたメモのレコードデータを取得
      const list = document.getElementById("list"); //listはHTMLを描画する場所を指定する際に使用する描画の親要素のlistの要素を取得
      const formText = document.getElementById("content"); //formTextはこの処理が終了した後にメモの入力フォームをリセットするために取得
      const HTML = `
        <div class="post" data-id=${item.id}>
          <div class="post-date">
            投稿日時：${item.created_at}
          </div>
          <div class="post-content">
          ${item.content}
          </div>
        </div>`;
      list.insertAdjacentHTML("afterend", HTML);
      formText.value = "";
    };
    e.preventDefault();
  });

  } 
window.addEventListener("load", memo); //windowをload時にmemoの実行