const boardSubmitBtn = document.getElementById("boardWriteSubmit");
const writeFormAddBtn = document.getElementById("writeFormAdd");
document
  .querySelectorAll("input[type = file]")[0]
  .addEventListener("change", function() {
    fileAddBtn(this);
  });

console.log("WRITE JS");

/* 작성 버튼 */
boardSubmitBtn.addEventListener("click", function() {
  fetch("/boardApi/write", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(response => {});

  /* FETCH END */
});

/* 행 추가 버튼 */
writeFormAddBtn.addEventListener("click", function() {
  let docFrag = document.createDocumentFragment();

  let form_div = mkTag("div", "class", "form_div");
  form_div.append(mkTag("br"));

  let table = mkTag("table", "border", "1");
  for (i = 0; i < 3; i++) {
    let tr = mkTag("tr");
    switch (i) {
      case 0:
        tr.append(mkTag("td", ["width", "align"], ["120", "center"], "제목"));
        td = mkTag("td", "width", "400");
        td.append(mkTag("input", ["type", "name"], ["text", "boardTitle"]));
        tr.append(td);
        break;

      case 1:
        tr.append(mkTag("td", ["width", "align"], ["120", "center"], "파일"));
        td = mkTag("td", "width", "400");
        fileInput = mkTag("input", "type", "file");

        /*========================= FILE ADD EVENT BINDING 파일 추가 이벤트 바인딩 =====================  */
        fileInput.addEventListener("change", function() {
          fileAddBtn(this);
        });

        td.append(fileInput);
        td.append(mkTag("span", "class", "fileListView"));
        tr.append(td);
        break;

      case 2:
        tr.append(mkTag("td", ["width", "align"], ["120", "center"]));
        td = mkTag("td", "width", "400");
        td.append(
          mkTag(
            "textarea",
            ["style", "name"],
            ["width:386px; height: 322px;", "boardComment"]
          )
        );
        tr.append(td);
        break;
    }

    table.append(tr);
  }
  form_div.append(table);
  docFrag.append(form_div);
  forms = document.getElementsByClassName("form_div");
  forms[forms.length - 1].after(docFrag);
});

/* TODO: 파일 추가 버튼 */
function fileAddBtn(fileInput) {
  /* console.log(fileInput.nextElementSibling); */
}

/* 이런건 어떨까? 태그 생성기 */
function mkTag(tagName, attr, value, html) {
  let tag;

  if (typeof tagName === "string") {
    tag = document.createElement(tagName);
  }

  if (attr != null || value != null) {
    if (Array.isArray(attr) && Array.isArray(value)) {
      len = attr.length == value.length ? attr.length : 0;

      for (let i = 0; i < len; i++) {
        tag.setAttribute(attr[i], value[i]);
      }
    } else {
      tag.setAttribute(attr, value);
    }
  }

  if (html) tag.innerHTML = html;

  return tag;
}

/* TODO: 태그 합치기 */
function initTag(arr) {
  if (Array.isArray(arr)) {
    len = arr.length;

    for (i = 0; i < len; i++) {
      if (Array.isArray(arr[i])) {
        this(arr[i]);
      } else {
      }
    }
  }
}
