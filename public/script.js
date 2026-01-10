const form = document.getElementById("uploadForm")
const fileList = document.getElementById("flatList")
const progressBar = document.getElementById("progress-bar")

function loadFiles() {
    fetch("/files")
        .then(res => res.json())
        .then(files => {
            fileList.innerHTML = "";
            files.forEach(f => {
                const li = document.createElement("li")
                li.innerHTML = `<a href="/files/${f}" download>${f}</a>`
                fileList.append(li);
            });
        })
}

form.addEventListener("submit", e => {
    e.preventDefault()
    const file = document.getElementById("fileInput").files[0]
    
    if (!file) return;

    const formData = new FormData();

    formData.append("file", file) // what ?!

    const xhr = new XMLHttpRequest() // what xmlhttpRequest is and why ?

    xhr.open("POST", "/upload")

    
    // explain this
    xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
            const percent = (event.loaded / event.total) * 100
            progressBar.style.width = percent + "%"
            loadFiles()
        }
    }

    // explain this
    xhr.onload = () => {
        if (xhr.status === 200) {
            alert(xhr.responseText)
            progressBar.style.width = "0%"
            loadFiles()
        } else {
            alert("Upload failed")
        }
    }

    xhr.send(formData)


})


document.addEventListener("DOMContentLoaded", loadFiles())