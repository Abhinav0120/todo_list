async function deleteMany() {
    const toDelete = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]')
    for (let checkbox of checkboxes) {
      if (checkbox.checked == true) {
        console.log(checkbox.value);
        toDelete.push(checkbox.value);
      }
    }
    await fetch("http://localhost:8000/deleteMany", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ toDelete })
    });
  }
  