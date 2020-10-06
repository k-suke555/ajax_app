function check() {
  const posts = document.querySelectorAll(".post"); //querySelectorAllメソッドでpostをクラス名に持つ全てのメモ要素を取得
  posts.forEach(function (post) {
    if (post.getAttribute("data-load") != null) {
      return null;
    }
    post.setAttribute("data-load", "true"); //要素にdata-loadとtrue属性を追加
    post.addEventListener("click", () => { //要素一つずつに対しクリックしたときに動作するイベント駆動
      const postId = post.getAttribute("data-id"); //getAttributeでどのメモをクリックしたのか属性値を取得しメモのid取得
      const XHR = new XMLHttpRequest(); //エンドポイントの呼び出しのためにAjaxに必要なオブジェクトの生成
      XHR.open("GET", `/posts/${postId}`, true); //openでリクエストを初期化
      XHR.responseType = "json"; //レスポンスの形式を指定するメソッド。jsonの形式を指定。
      XHR.send(); //sendで最後に設定した情報をサーバーサイドへ送信する。
      XHR.onload = () => {
        if (XHR.status != 200) { //ステータスコードを確認して該当するエラーメッセージをアラートで表示してくれるメソッド
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          return null; //return nullによってJavaScriptの処理から抜け出す。つまり、処理の終了。
        }
        const item = XHR.response.post; //レスポンスされたデータを変数itemに代入
        if (item.checked === true) {
          post.setAttribute("data-check", "true"); // 既読状態であれば、灰色に変わるcssを適用するためのカスタムデータを追加している
        } else if (item.checked === false) {
          post.removeAttribute("data-check"); // 未読状態であれば、カスタムデータを削除している
        }
      };
    });
  });
}
setInterval(check, 1000); //check関数が１秒に１回行われる