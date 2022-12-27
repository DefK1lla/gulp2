const fileInputs = document.querySelectorAll(".input-file-wrapper");

fileInputs.forEach(elem => [
  elem.querySelector(".input-file").fileList = [],
  elem.addEventListener("change", handleChange)
]);


function handleChange(e) {
  e.target.fileList.push(...e.target.files);

  const inputFileList = e.currentTarget.querySelector(".input-file-name-list");
  inputFileList.innerHTML = e.target.fileList.map((file, index) => `
  <div class="input-file-name" data-index=${index}>
    <div class="input-file-text">
      ${file.name}
    </div>
    <button class="input-file-remove">
      <img src="./assets/icons/file-remove.svg" alt="">
    </button>
  </div>
  `).join("");

  inputFileList.querySelectorAll(".input-file-remove")
    .forEach(elem => elem.addEventListener("click", handleFileRemove));
}

function handleFileRemove(e) {
  const removeElem = e.target.closest("[data-index]");
  const input = e.target.closest(".input-file-wrapper").querySelector(".input-file");
  input.fileList = input.fileList.filter((elem, index) => index != removeElem.dataset.index);
  input.value = "";
  removeElem.remove();
}