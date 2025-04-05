document.getElementById('uploadForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const formData = new FormData();
    const fileInput = document.getElementById('fileInput');
    formData.append('file', fileInput.files[0]);

    fetch('/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      loadFileList();
    })
    .catch(error => {
      alert('Error uploading file');
      console.error(error);
    });
});

  