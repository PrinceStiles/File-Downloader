const fileInput = document.querySelector("input"),
downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", (e) => {
  e.preventDefault();                                        // preventing form from submitting
  downloadBtn.innerText = 'Downloading file...';
  fetchFile(fileInput.value);
});

function fetchFile(url) {
                                                             // fetching url and returning result as blob
  fetch(url)
    .then((res) => res.blob())
    .then((file) => {

                                                             // URL.createObjectUrl creates url of passed object

      let tempUrl = URL.createObjectURL(file);
      let aTag = document.createElement("a");

      aTag.href = tempUrl;                                   //passing tempUrl as href of <a> tag
                                                             // passing file last name and extention as download value of <a>

      aTag.download = url.replace(/^.*[\\\/]/, '');
      document.body.appendChild(aTag);                       // adding <a> tag inside the body
      aTag.click();                                          // clicking <a> tag to download file
      aTag.remove();                                         // removing <a> tag once file download
      downloadBtn.innerText = 'Download file';
    }).catch(() => {
                                                             // catch method will call if any error comes during downloading
        downloadBtn.innerText = 'Download file'
        alert('Failed to download file!')
    })
}
